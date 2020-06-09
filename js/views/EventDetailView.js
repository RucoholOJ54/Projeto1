import EventController from '../controllers/EventController.js'

export default class EventDetailView {
    constructor() {
        this.eventController = new EventController()

        //DOM
        this.eventName = document.querySelector("#txtEventName")
        this.eventLocation = document.querySelector("#txtLocation")
        this.imgEvent = document.querySelector("#imgEvent")
        this.txtDate = document.querySelector("#txtDate")
        this.txtDesc = document.querySelector("#txtDesc")
        this.txtRecord = document.querySelector("#txtRecord")
        this.txtTimeLimit = document.querySelector("#txtTimeLimit")
        this.txtPersonLimit = document.querySelector("#txtPersonLimit")
        this.txtCourse = document.querySelector("#txtCourse")
        this.btnSubscrive = document.querySelector("#btnSubscrive")

        this.fillEventData()
    }

    fillEventData() {
        const currentEvent = this.eventController.getCurrentEvent()
        this.eventName.innerHTML = currentEvent.name
        this.eventLocation.innerHTML = `Localização: ${currentEvent.location}`
        this.txtDate.innerHTML = `Data: ${currentEvent.date}`
        this.txtRecord.innerHTML = currentEvent.record
        this.txtTimeLimit.innerHTML = currentEvent.timeLimit
        this.txtPersonLimit.innerHTML = currentEvent.personLimit
        this.imgEvent.src = currentEvent.logo
        this.txtDesc.innerHTML = currentEvent.description
        this.txtCourse.innerHTML = `Distância: ${currentEvent.course} Km`
    }
}