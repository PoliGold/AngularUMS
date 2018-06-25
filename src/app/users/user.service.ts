import {Injectable} from '@angular/core';

@Injectable()

export class UserService {

    constructor() {
    }

    getUsers() {
        return [
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
            },
        ];
    }
}
