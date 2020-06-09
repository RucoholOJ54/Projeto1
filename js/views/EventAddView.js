import EventController from '../controllers/EventController.js'

export default class EventAddView {
    constructor() {
        this.eventController = new EventController();

        //add Equipa DOM
        this.addEventForm = document.querySelector("#frmAddEvent")
        this.eventName = document.querySelector("#txtNameEvent")
        this.eventLocation = document.querySelector("#txtLocationEvent")
        this.eventDate = document.querySelector("#txtDateEvent")
        this.eventRecord = document.querySelector("#txtRecord")
        this.eventTimeLimit = document.querySelector("#txtTimeLimitEvent")
        this.eventPersonLimit = document.querySelector("#txtPersonLimitEvent")
        this.eventLogo = document.querySelector("#txtLogoEvent")
        this.eventDesc = document.querySelector("#txtDescEvent")
        this.eventCourse = document.querySelector("#txtCourseEvent")
        this.addEventMessage = document.querySelector("#addEventMessage")
        this.bindAddAddEventForm()
    }

    bindAddAddEventForm() {
        this.addEventForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.eventController.addEvent(
                    this.eventName.value,
                    this.eventLocation.value,
                    this.eventDate.value,
                    this.eventRecord.value,
                    this.eventTimeLimit.value,
                    this.eventPersonLimit.value,
                    this.eventLogo.value,
                    this.eventLogo.value,
                    this.eventDesc.value,
                    this.eventCourse.value
                );
                this.displayAddEventMessage('Prova adicionada com sucesso!', 'success');

                // Wait 1 second before sending to catalog, so the user can see the login success message
                setTimeout(() => {
                    location.href="../html/eventsCatalog.html";
                },
                1000);
            } catch(e) {
                this.displayAddEventMessage(e, 'danger');
            }
        });
    }

    displayAddEventMessage(message, type) {
        this.addEventMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}