import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // Register DOM
        this.registerForm = document.querySelector("#frmRegister")
        this.registerUsername = document.querySelector("#txtUsernameRegister")
        this.registerPassword = document.querySelector("#txtPasswordRegister")
        this.registerPassword2 = document.querySelector("#txtPasswordRegister2")
        this.nameUser = document.querySelector("#txtName")
        this.imgUser = document.querySelector("#txtImgUser")
        this.ageUser = document.querySelector("#txtAge")
        this.locationUser = document.querySelector("#txtLocation")
        this.heightUser = document.querySelector("#txtHeight")
        this.runTypeUser = document.querySelector("#runType")
        this.favCompUser = document.querySelector("#favComp")
        this.averageKmUser = document.querySelector("#averageKm")
        this.shoeUser = document.querySelector("#shoe")
        this.equipUser = document.querySelector("#equip")
        this.registerMessage = document.querySelector("#mdlRegisterMessage")
        
        this.bindAddRegisterForm();
        
        // Login DOM
        this.loginForm = document.querySelector("#frmLogin")
        this.loginUsername = document.querySelector("#txtUsername")
        this.loginPassword = document.querySelector("#txtPassword")
        this.loginMessage = document.querySelector("#loginMessage");

        this.bindAddLoginForm();

        // buttons DOM
        this.loginButton = document.querySelector("#btnMenuLogin")
        this.MenuRegisterButton = document.querySelector("#btnMenuRegist")


    }

    bindAddRegisterForm() {
        this.registerForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                if (this.registerPassword.value !== this.registerPassword2.value) {
                    throw Error ('A Password e o confirmar password não são iguais')
                }
                this.userController.createUser(
                    this.registerUsername.value,
                    this.registerPassword.value,
                    this.nameUser.value,
                    this.imgUser.value,
                    this.ageUser.value,
                    this.locationUser.value,
                    this.heightUser.value,
                    this.runTypeUser.value,
                    this.favCompUser.value,
                    this.averageKmUser.value,
                    this.shoeUser.value,
                    this.equipUser.value,
                    );
                this.displayRegisterMessage('User Registado com sucesso!', 'success');
                
                
            }
            catch (e) {
                this.displayRegisterMessage(e, 'danger');
            }
        })
    }

    bindAddLoginForm() {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.userController.loginUSer(this.loginUsername.value , this.loginPassword.value);
                // this.displayLoginMessage('Login efetuado com sucesso', 'success');
                
                
                swal({
                    title: "Login efetuado com sucesso!",
                    text: `Seja bem-vindo ${this.loginUsername.value}`,
                    icon: "success",
                    button: false,
                  });
                setTimeout(() => {
                    location.href="html/homePage.html";
                },
                2000);
            } catch (e) {
                this.displayLoginMessage(e , 'danger');
                // swal('Login inválido!', '', "error")
            }
        })
    }

    displayRegisterMessage(message, type) {
        this.registerMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    
}