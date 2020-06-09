import EventController from '../controllers/EventController.js'
import UserController from '../controllers/UserController.js'


export default class EventDetailView {
    constructor() {
        this.eventController = new EventController()
        this.userController = new UserController()

        //DOM
        this.eventName = document.querySelector("#txtEventName")
        this.eventLocation = document.querySelector("#txtLocation")
        this.imgEvent = document.querySelector("#imgEvent")
        this.txtDate = document.querySelector("#txtDate")
        this.txtPrice = document.querySelector("#txtPrice")
        this.txtRetrieve = document.querySelector("#txtRetrieve")
        this.txtDesc = document.querySelector("#txtDesc")
        this.txtRecord = document.querySelector("#txtRecord")
        this.txtTimeLimit = document.querySelector("#txtTimeLimit")
        this.txtPersonLimit = document.querySelector("#txtPersonLimit")
        this.txtCourse = document.querySelector("#txtCourse")
        this.btnSubscrive = document.querySelector("#btnSubscrive")

        this.fillEventData()
        this.fillAddSubscriveEvent()
    }

    fillEventData() {
        const currentEvent = this.eventController.getCurrentEvent()
        let vagas = currentEvent.personLimit
        this.eventName.innerHTML = currentEvent.name
        this.eventLocation.innerHTML = `Localização: ${currentEvent.location}`
        this.txtDate.innerHTML = `Data: ${currentEvent.date}`
        this.txtPrice.innerHTML = `Preço: ${currentEvent.price}€`
        this.txtRetrieve.innerHTML = `Levantamento dos equipamentos: ${currentEvent.txtRetrieve}`
        this.txtRecord.innerHTML = currentEvent.record
        this.txtTimeLimit.innerHTML = vagas
        this.txtPersonLimit.innerHTML = currentEvent.personLimit
        this.imgEvent.src = currentEvent.logo
        this.txtDesc.innerHTML = currentEvent.description
        this.txtCourse.innerHTML = `Distância: ${currentEvent.course} Km`
    }

    fillAddSubscriveEvent() {
        this.btnSubscrive.addEventListener('click', event => {
            event.preventDefault()
            this.eventController.addEventTime(this.userController.loginUserTime(), '00:00:00')
        })
    }


}