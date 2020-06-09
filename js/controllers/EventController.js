import EventModel from '../models/EventModel.js'

export default class EventController {
    constructor() {
        this.eventModel = new EventModel()
    }

    addEvent(name, location, date, price, retrieve, record, timeLimit, personLimit, logo, description, course) {
        if(!this.eventModel.getAll().some(prova => prova.name === name)) {
            this.eventModel.create(name, location, date, price, retrieve, record, timeLimit, personLimit, logo, description, course);
        } else {
            throw Error(`A prova ${name} já existe!`);
        }
    }

    addEventTime(username, time, id) {
        if(!this.eventModel.getAllTime().some(eventTime => eventTime.username === username)) {
            this.eventModel.createEventArray(username, time , id)
            this.eventModel._saveStorage(id)
        } else {
            throw Error (`O user ${username} não se encontra inscrito na prova!`);
        }
    }

    removeEvent(name) {
        this.eventModel.remove(name)
    }

    setCurrentEvent(id) {
        this.eventModel.setCurrentEvent(id);
        this.eventModel.createEventArray('', '', id)
    }

    getCurrentEvent() {
        return this.eventModel.getCurrentEvent();
    }

    getEvents(filterName='', filterLocation='', filterDistance ='', isSorted= false) {

        if (isSorted) {
            this.eventModel.sort();
        }

        const provas = this.eventModel.getAll()

        if (filterLocation === '' && filterName === '' && filterDistance ==='') {
            return provas;
        }

        let filteredEvents = [];

        for (const prova of provas) {
            let filterEventName = false , filterEventLocation = false , filterEventDistance = false

            if ((prova.name.includes(filterName) && filterName != '') || filterName === '') {
                filterEventName = true;
            }

            if ((prova.location.includes(filterLocation) && filterLocation != '') || filterLocation === '') {
                filterEventLocation = true;
            }

            if((prova.course===filterDistance && filterDistance!='') || filterDistance==='') {
                filterEventDistance = true
            }

            if (filterEventName && filterEventLocation && filterEventDistance) {
                filteredEvents.push(prova)
            }
        }

        return filteredEvents
    }
}