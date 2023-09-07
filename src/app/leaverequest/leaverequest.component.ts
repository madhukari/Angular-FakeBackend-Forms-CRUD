import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveObject } from '../_models/user';
import { AlertService, AuthenticationService, UserService } from '../_services/index';

@Component({
    templateUrl: 'leaverequest.component.html'
})

export class LeaveRequestComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    users=[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.model.leaveType = "default"; 
        this.model.employeeType = "default"; 
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    leaveRequest() {
        let uu = JSON.parse(localStorage.getItem('currentUser'));
        let currentUser = this.users.find(item => item.id == uu.id);
        currentUser['LeaveObject'] = this.model;
        currentUser.id = currentUser.id-1;
        this.userService.updateUserJson(currentUser).subscribe(res=> console.log(res));
        this.router.navigate['/user'];     
    }
}
