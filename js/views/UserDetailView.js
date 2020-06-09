import UserController from '../controllers/UserController.js'

export default class UserDetailView {
    constructor() {
        this.userController = new UserController()

        //DOM
        this.txtUserName = document.querySelector("#txtUserName")
        this.imgUser = document.querySelector("#imgUser")
        this.txtUserLocation = document.querySelector("#txtUserLocation")
        this.txtUserAge = document.querySelector("#txtUserAge")
        this.txtUserHeight = document.querySelector("#txtUserHeight")
        this.txtRunType = document.querySelector("#txtRunType")
        this.txtFavComp = document.querySelector("#txtFavComp")
        this.txtAverageKm = document.querySelector("#txtAverageKm")
        this.txtShoe = document.querySelector("#txtShoe")
        this.txtEquip = document.querySelector("#txtEquip")

        this.fillTeamData()
    }

    fillTeamData() {
        const currentUser = this.teamController.getCurrentUser()
        
    }
}