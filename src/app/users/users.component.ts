import { Component } from '@angular/core';

@Component({
    selector : 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent {
    title = 'Users';
    users = [
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
