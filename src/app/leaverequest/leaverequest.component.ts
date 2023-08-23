import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AlertService, AuthenticationService, UserService } from '../_services/index';

@Component({
    templateUrl: 'leaverequest.component.html'
})

export class LeaveRequestComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.model.leaveType = "default"; 
        this.model.employeeType = "default"; 
    }

    leaveRequest() {
        console.log('CMPmodel',this.model);
        this.userService.setterGetter(2,this.model)
    }
}
