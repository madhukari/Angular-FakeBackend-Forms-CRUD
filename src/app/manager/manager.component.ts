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
        this.userService.getLeavesByJson().subscribe(res=> {this.leaves =  res})
    }


    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    approveLeave(leave,type){
        if(type == 1){
            this.leaves.find(item => item.LeaveObject?.userName == leave.LeaveObject?.userName)["status"]="approved";
        }else{
            this.leaves.find(item => item.LeaveObject?.userName == leave.LeaveObject?.userName)["status"]="rejected";
        } 
    }
}