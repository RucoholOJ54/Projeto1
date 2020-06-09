import UserModel from '../models/UserModel.js'

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    createUser(username, password, name, img, age, location, height, runType, favComp, averageKm, shoe, equip) {
        if(!this.userModel.getAll().some(user => user.username === username)) {
            this.userModel.create(username, password);
            this.userModel.createData(username, password, name, img, age, location, height, runType, favComp, averageKm, shoe, equip);
        } else {
            throw Error(`O nome ${username} não se encontra disponível`);
        }
    }

    loginUSer(username, password) {
        if (this.userModel.getAll().some(user => {return user.username === username && user.password === password})) {
            this.userModel.login(username);
            return true;
        } else {
            throw Error('Login inválido!');
        }
    }

    loginUserTime(username) {
        return this.userModel.userLogged(username);
    }

    logoutUser() {
        this.userModel.logout();
    }

    checkLoginStatus() {
        return this.userModel.isLogged();
    }
}