import TeamController from '../controllers/TeamController.js'

export default class TeamAddView {
    constructor() {
        this.teamController = new TeamController();

        //add Equipa DOM
        this.addTeamForm = document.querySelector("#frmAddTeam")
        this.teamName = document.querySelector("#txtNameTeam")
        this.teamLocation = document.querySelector("#txtLocationTeam")
        this.teamDesc = document.querySelector("#txtDescTeam")
        this.teamColor = document.querySelector("#txtColorTeam")
        this.teamLogo = document.querySelector("#txtLogoTeam")
        this.teamShirt = document.querySelector("#txtShirtTeam")
        this.addTeamMessage = document.querySelector("#addTeamMessage")

        this.bindAddAddTeamForm()
    }

    bindAddAddTeamForm() {
        this.addTeamForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.teamController.addTeam(
                    this.teamName.value,
                    this.teamLocation.value,
                    this.teamLogo.value,
                    this.teamDesc.value,
                    this.teamShirt.value,
                    this.teamColor.value
                );
                this.displayAddTeamMessage('Equipa adicionada com sucesso!', 'success');

                // Wait 1 second before sending to catalog, so the user can see the login success message
                setTimeout(() => {
                    location.href="../html/teamsCatalog.html";
                },
                1000);
            } catch(e) {
                this.displayAddTeamMessage(e, 'danger');
            }
        });
    }

    displayAddTeamMessage(message, type) {
        this.addTeamMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}