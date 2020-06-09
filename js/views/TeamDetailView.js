import TeamController from '../controllers/TeamController.js'

export default class TeamDetailView {
    constructor() {
        this.teamController = new TeamController()

        //DOM
        this.teamName = document.querySelector("#txtTeamName")
        this.teamLocation = document.querySelector("#txtLocation")
        this.teamEquip = document.querySelector("#imgEquip")
        this.teamEmblem = document.querySelector("#imgEmblem")
        this.teamDesc = document.querySelector("#txtDesc")
        this.DescColor = document.querySelector("#txtDescColor")

        this.fillTeamData()
    }

    fillTeamData() {
        const currentTeam = this.teamController.getCurrentTeam()
        this.teamName.innerHTML = currentTeam.name
        this.teamLocation.innerHTML = `Localização: ${currentTeam.location}`
        this.teamEquip.src = currentTeam.shirt
        this.teamEmblem.src = currentTeam.logo
        this.teamDesc.innerHTML = currentTeam.description
        this.DescColor.style.color = currentTeam.color
        this.teamName.style.color = currentTeam.color
    }
}