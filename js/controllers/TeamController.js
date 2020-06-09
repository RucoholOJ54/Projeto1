import TeamModel from '../models/TeamModel.js'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    addTeam(name, location, logo, description, shirt, color) {
        if(!this.teamModel.getAll().some(equipa => equipa.name === name)) {
            this.teamModel.create(name, location, logo, description, shirt, color);
        } else {
            throw Error(`A equipa ${name} já existe!`);
        }
    }

    removeTeam(name) {
        this.teamModel.remove(name)
    }

    setCurrentTeam(id) {
        this.teamModel.setCurrentTeam(id);
    }

    getCurrentTeam() {
        return this.teamModel.getCurrentTeam();
    }

    getTeams(filterName='', filterLocation='', isSorted= false) {

        if (isSorted == true) {
            this.teamModel.sort();
        }

        const equipas = this.teamModel.getAll()

        if (filterLocation === '' && filterName === '') {
            return equipas;
        }

        let filteredTeams = [];

        for (const equipa of equipas) {
            let filterTeamName = false , filterTeamLocation = false;

            if ((equipa.name.includes(filterName) && filterName != '') || filterName === '') {
                filterTeamName = true;
            }

            if ((equipa.location.includes(filterLocation) && filterLocation != '') || filterLocation === '') {
                filterTeamLocation = true;
            }

            if (filterTeamName && filterTeamLocation) {
                filteredTeams.push(equipa)
            }
        }

        return filteredTeams
    }
}