export default class EventModel {
    constructor() {
        this.provas = localStorage.provas ? JSON.parse(localStorage.provas) : [];
        this.TemposProvas = localStorage.TemposProvas ? JSON.parse(localStorage.TemposProvas) : [];
    }

    getAll() {
        return this.provas;
    }

    getAllTime() {
        return this.TemposProvas;
    }

    create(name, location, date, price, retrieve, record, timeLimit, personLimit, logo, description, course) {
        const prova = {
            id: this.provas.length > 0 ? this.provas[this.provas.length - 1].id + 1 : 1,
            name: name,
            location: location,
            date: date,
            price: price,
            retrieve: retrieve,
            record: record,
            timeLimit: timeLimit,
            personLimit: personLimit,
            logo: logo,
            description: description,
            course: course
        }
        this.provas.push(prova);
        this._saveStorage();
    }

    sort() {
        this.provas.sort(this._compare);
        this._saveStorage();
    }

    setCurrentEvent(id) {
        localStorage.setItem('prova', id);
    }

    getCurrentEvent() {
        return this.provas.find(prova => prova.id === +localStorage.prova)
    }

    remove(name) {
        this.provas = this.provas.filter(prova => provas.name != name)
    }

    _saveStorage(id) {
        id = localStorage.getItem('prova')
        localStorage.setItem('provas', JSON.stringify(this.provas));
        localStorage.setItem('prova' + '#' + `${id}`, JSON.stringify(this.TemposProvas))
    }

    createEventArray(username, time, id) {
        id = localStorage.getItem('prova')
        const eventTime = {
            username: username,
            time: time
        }
        this.TemposProvas.push(eventTime)
        this._saveStorage()
    }

    _compare(provaA, provaB) {
        if (provaA.name < provaB.name)
            return -1;
        if (provaA.name > provaB.name)
            return 1;
        return 0;
    }
}