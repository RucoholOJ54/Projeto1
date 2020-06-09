import UserView from './views/UserView.js';
import TeamCatalogView from './views/TeamCatalogView.js';
import TeamAddView from './views/TeamAddView.js';
import TeamDetailView from './views/TeamDetailView.js'
import EventAddView from './views/EventAddView.js';
import EventCatalogView from './views/EventCatalogView.js';
import EventDetailView from './views/EventDetailView.js';

class App {
    constructor() {
        this.routes = {
            'index': [
                UserView,
            ],
            'teamsCatalog': [
                TeamCatalogView
            ],
            'addTeam': [
                TeamAddView
            ],
            'Team': [
                TeamDetailView
            ],
            'eventsCatalog': [
                EventCatalogView
            ],
            'addEvent': [
                EventAddView
            ],
            'event': [
                EventDetailView
            ]
        };

        // import dummy data for testing purposes
        // this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    // _importDataFixtures() {
    //     const equipas = [
    //         {
    //             id: 1,
    //             name: 'Muse',
    //             location: 'Famalicão',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'The best band ever',
    //             shirt: '../img/equipamento.lixo.png',
    //             color: 'green'  
    //         },
    //         {
    //             id: 2,
    //             name: 'GreenDay',
    //             location: 'Porto',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'The best band ever',
    //             shirt: 'https://www.youtube.com/watch?v=AR6A3dap6MI',
    //             color: 'green'
    //         },
    //         {
    //             id: 3,
    //             name: 'UHF',
    //             location: 'Povoa',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'The best band ever',
    //             shirt: 'https://www.youtube.com/watch?v=AR6A3dap6MI',
    //             color: 'green'
    //         },
    //         {
    //             id: 4,
    //             name: 'Guns',
    //             location: 'Lisboa',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'The best band ever',
    //             shirt: 'https://www.youtube.com/watch?v=AR6A3dap6MI',
    //             color: 'green'
    //         }
    //     ];

    //     const provas = [
    //         {
    //             id: 1,
    //             name: 'Maratona da PVZ',
    //             location: 'Povoa de Varzim',
    //             date: '10 de Outubro',
    //             price: '5',
    //             retrieve: '5 de Outubro',
    //             record: '02:30:23',
    //             timeLimit: '06:00:00',
    //             personLimit: '7500',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'em famalicão é só vaquedo',
    //             course: '21'  
    //         },
    //         {
    //             id: 2,
    //             name: 'Maratona do Porto',
    //             location: 'Porto',
    //             date: '10 de Outubro',
    //             price: '5',
    //             retrieve: '5 de Outubro',
    //             record: '02:30:23',
    //             timeLimit: '12:00:00',
    //             personLimit: '10000',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'descTeste',
    //             course: '42'
    //         },
    //         {
    //             id: 3,
    //             name: 'Maratona da Vila',
    //             location: 'Vila do Conde',
    //             date: '10 de Outubro',
    //             price: '5',
    //             retrieve: '5 de Outubro',
    //             record: '02:30:23',
    //             timeLimit: '03:00:00',
    //             personLimit: '5000',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'descTeste',
    //             course: '5'
    //         },
    //         {
    //             id: 4,
    //             name: 'Maratona de Lisboa',
    //             location: 'Lisboa',
    //             date: '10 de Outubro',
    //             price: '5',
    //             retrieve: '5 de Outubro',
    //             record: '02:30:23',
    //             timeLimit: '06:00:00',
    //             personLimit: '15000',
    //             logo: '../img/simbolo equipa.jpg',
    //             description: 'descTeste',
    //             course: '5'
    //         }
    //     ];

    //     const users = [
    //         {
    //             id: 1,
    //             username: 'admin',
    //             password: 'admin'
    //         },
    //         {
    //             id: 2,
    //             username: 'user',
    //             password: 'user'
    //         }
    //     ];

    //     const usersData = [
    //         {
    //             id: 1,
    //             username: 'admin',
    //             password: 'admin',
    //             name: 'admin',
    //             img:'../img/simbolo equipa.jpg',
    //             age: '19',
    //             location: 'PVZ',
    //             height: '174',
    //             runType: 'supinada',
    //             favComp: 'trail',
    //             averageKm: '10',
    //             shoe: 'nike',
    //             equip: 'M'
    //         }
    //     ]

    //     // Load the fixtures in case there is no data in the local storage 
    //     if (!localStorage.equipas) {
    //         localStorage.setItem('equipas', JSON.stringify(equipas));    
    //     }
    //     if (!localStorage.users) {
    //         localStorage.setItem('users', JSON.stringify(users));
    //     }
    //     if (!localStorage.provas) {
    //         localStorage.setItem('provas', JSON.stringify(provas));
    //     }
    //     if (!localStorage.usersData) {
    //         localStorage.setItem('usersData', JSON.stringify(usersData));
    //     }
    // }

    
}

new App();