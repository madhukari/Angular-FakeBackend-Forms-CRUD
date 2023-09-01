 import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    
    templateUrl: './manager.component.html'
})

export class ManagerComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    leaves: any = '';

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.leaves = this.userService.setterGetter(1).subscribe(res=> {return res})
        console.log('this.leaves=',this.leaves)
    }


    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}