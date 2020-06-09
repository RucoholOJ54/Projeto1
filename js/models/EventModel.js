export default class EventModel {
    constructor() {
        this.provas = localStorage.provas ? JSON.parse(localStorage.provas) : [];
    }

    getAll() {
        return this.provas;
    }

    create(name, location, date, record, timeLimit, personLimit, logo, description, course,) {
        const prova = {
            id: this.provas.length > 0 ? this.provas[this.provas.length - 1].id + 1 : 1,
            name: name,
            location: location,
            date: date,
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

    _saveStorage() {
        localStorage.setItem('provas', JSON.stringify(this.provas));
    }

    _compare(provaA, provaB) {
        if (provaA.name < provaB.name)
            return -1;
        if (provaA.name > provaB.name)
            return 1;
        return 0;
    }
}