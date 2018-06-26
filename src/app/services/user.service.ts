import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

@Injectable()

export class UserService {
    users: User[] = [
        {
            name: 'Andrea',
            lastname: 'Polidoro',
            email: 'andrea.polidoro@me.com',
            fiscalcode: 'PLDNDR92C31H501F',
            province: 'Roma',
            phone: '+393396059710'
        },
        {
            name: 'Riccardo',
            lastname: 'Toni',
            email: 'riccardo.toni@me.com',
            fiscalcode: '#',
            province: 'Roma',
            phone: '#'
        },
        {
            name: 'Luca',
            lastname: 'Martini',
            email: 'luca.martini@me.com',
            fiscalcode: '#',
            province: 'Roma',
            phone: '#'
        }
    ];

    constructor() {
    }

    getUsers() {
        return this.users;
    }

    deleteUser(user){
        let index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
}
