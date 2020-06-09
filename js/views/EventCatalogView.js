import EventController from '../controllers/EventController.js'
import UserController from '../controllers/UserController.js'

export default class EventView {
    constructor() {
        this.eventController = new EventController();
        this.userController = new UserController();

        // catalogo
        this.catalog = document.querySelector("#eventsCatalog")
        this.btnSearch = document.querySelector("#btnSearch")
        this.btnSort = document.querySelector("#btnSort")
        this.btnAdd = document.querySelector("#btnAdd")
        this.txtEventName = document.querySelector("#txtEventName")
        this.txtLocation = document.querySelector("#txtLocation")
        this.sltDistance = document.querySelector("#sltDistance")

        this.renderCatalog(this.eventController.getEvents())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddEvent()
        this._renderAddBandButton()
    }

    bindAddFilterEvent() {
        this.btnSearch.addEventListener('click', () => {
            this.renderCatalog(this.eventController.getEvents(this.txtEventName.value, this.txtLocation.value, this.sltDistance.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.eventController.getEvents(this.txtEventName.value, this.txtLocation.value, this.sltDistance.value, true))
        })
    }

    bindAddAddEvent() {
        this.btnAdd.addEventListener('click', () => {
            location.href='../html/addEvent.html';
        })
    }

    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.eventController.setCurrentEvent(event.target.id)  
                location.href='../html/event.html';
            })
        }
    }

    renderCatalog(provas = []) {
        let result = ''
        let i=0
        for (const prova of provas) {
            if(i % 3 === 0) { result+=`<div class="row mb-2">` }
            result += this._generateEventCard(prova)
            i++
            if(i % 3 ===0) {result+=`</div>`}            
        }

        this.catalog.innerHTML = result;
        

        // this.bindAddRemoveEvent()
        this.bindAddSeeMoreEvent()
    }

    _generateEventCard(prova) {
        let html = `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${prova.logo}" alt="" >
                <div class="card-body">
                    <h4 class="card-title" >${prova.name}</h4>
                    <button id="${prova.id}" class="btn btn-primary see">See more</button>
            `
            if(this.userController.checkLoginStatus()) {
                html+= `<button id="${prova.nome}" class="btn btn-danger remove">Remove</button>`
            }
                
            html+= `
                </div>
            </div>
        </div>        
        `
        return html
    }

    _renderAddBandButton() {
        if(this.userController.checkLoginStatus()) {
            this.btnAdd.style.visibility = 'visible';
        } else {
            this.btnAdd.style.visibility = 'hidden';
        }
    }
}