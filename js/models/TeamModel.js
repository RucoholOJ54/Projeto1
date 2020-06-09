export default class TeamModel {
    constructor() {
        this.equipas = localStorage.equipas ? JSON.parse(localStorage.equipas) : [];
    }

    getAll() {
        return this.equipas;
    }

    create(name, location, logo, description, shirt, color) {
        const equipa = {
            id: this.equipas.length > 0 ? this.equipas[this.equipas.length - 1].id + 1 : 1,
            name: name,
            location: location,
            logo: logo,
            description: description,
            shirt: shirt,
            color:color
        }
        this.equipas.push(equipa);
        this._saveStorage();
    }

    sort() {
        this.equipas.sort(this._compare);
        this._saveStorage();
    }

    setCurrentTeam(id) {
        localStorage.setItem('equipa', id);
    }

    getCurrentTeam() {
        return this.equipas.find(equipa => equipa.id === +localStorage.equipa)
    }

    remove(name) {
        this.equipas = this.equipas.filter(equipa => equipa.name != name)
        this._saveStorage()
    }

    _saveStorage() {
        localStorage.setItem('equipas', JSON.stringify(this.equipas));
    }

    _compare(equipaA, equipaB) {
        if (equipaA.name < equipaB.name)
            return -1;
        if (equipaA.name > equipaB.name)
            return 1;
        return 0;
    }
}