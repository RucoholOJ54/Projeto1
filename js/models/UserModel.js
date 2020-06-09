export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
        // this.usersData = localStorage.usersData ? JSON.parse(localStorage.usersData) : [];
    }

    getAll() {
        return this.users;
    }

    create(username, password) {
        const user = {
            id: this.users.length > 0 ? this.users[this.users.length -1].id + 1 : 1,
            username: username,
            password: password
        }

        
        this.users.push(user);
        this._saveStorage();
    }

    createData(username, password, name, img, age, location, height, runType, favComp, averageKm, shoe, equip) {
        const userData = {
            id: this.usersData.length > 0 ? this.users[this.users.length -1].id + 1 : 1,
            username: username,
            password: password,
            name: name,
            img: img,
            age: age,
            location: location,
            height: height,
            runType: runType,
            favComp: favComp,
            averageKm: averageKm,
            shoe: shoe,
            equip: equip,
        }
        this.usersData.push(userData);
        this._saveStorage();
    }

    login(user) {
        sessionStorage.setItem('loggedUser', user);
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    userLogged() {
        return sessionStorage.getItem('loggedUser')
    }

    isLogged() {
        // return sessionStorage.getItem('loggedUser') === 'admin' ? true : false;
        let v = sessionStorage.getItem('loggedUser')
        return v === 'admin' ? true : false;
    }

    _saveStorage() {
        localStorage.setItem('users' , JSON.stringify(this.users));
        localStorage.setItem('usersData' , JSON.stringify(this.UsersData));
    }
}