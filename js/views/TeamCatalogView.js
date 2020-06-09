import TeamController from '../controllers/TeamController.js'
import UserController from '../controllers/UserController.js'

export default class TeamView {
    constructor() {
        this.teamController = new TeamController();
        this.userController = new UserController()

        // catalogo
        this.catalog = document.querySelector("#teamsCatalog")
        this.btnSearch = document.querySelector("#btnSearch")
        this.btnSort = document.querySelector("#btnSort")
        this.btnAdd = document.querySelector("#btnAdd")
        this.txtTeamName = document.querySelector("#txtTeamName")
        this.txtLocation = document.querySelector("#txtLocation")

        this.renderCatalog(this.teamController.getTeams())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddEvent()
    }

    bindAddFilterEvent() {
        this.btnSearch.addEventListener('click', () => {
            this.renderCatalog(this.teamController.getTeams(this.txtTeamName.value, this.txtLocation.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.teamController.getTeams(this.txtTeamName.value, this.txtLocation.value, true))
        })
    }

    bindAddAddEvent() {
        this.btnAdd.addEventListener('click', () => {
            location.href='../html/addTeam.html';
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                this.teamController.removeTeam(event.target.id)
                this.renderCatalog(this.teamController.getTeams(this.txtTeamName.value, this.txtLocation.value))
            })
        }
    }

    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.teamController.setCurrentTeam(event.target.id)  
                location.href='../html/Team.html';
            })
        }
    }

    renderCatalog(equipas = []) {
        let result = ''
        let i=0
        for (const equipa of equipas) {
            if(i % 3 === 0) { result+=`<div class="row mb-4">` }
            result += this._generateTeamCard(equipa)
            i++
            if(i % 3 ===0) {result+=`</div>`}            
        }

        this.catalog.innerHTML = result;
        // this._renderAddBandButton(this.userController.checkLoginStatus());
        

        this.bindAddRemoveEvent()
        this.bindAddSeeMoreEvent()
    }

    _generateTeamCard(equipa) {
        let html = `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${equipa.logo}" alt="" >
                <div class="card-body">
                    <h4 class="card-title" >${equipa.name}</h4>
                    <button id="${equipa.id}" class="btn btn-primary see">See more</button>
                    
            `
            if(this.userController.checkLoginStatus()) {
                html+= `<button id="${equipa.nome}" class="btn btn-danger remove">Remove</button>`
            }
                
            html+= `
                </div>
            </div>
        </div>        
        `
        return html
    }

    // _renderAddBandButton(userIsLogged) {
    //     if(userIsLogged) {
    //         this.btnAdd.style.visibility = 'visible';
    //     } else {
    //         this.btnAdd.style.visibility = 'hidden';
    //     }
    // }
}