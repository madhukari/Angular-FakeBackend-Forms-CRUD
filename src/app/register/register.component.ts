import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import {User,LeaveObject } from '../_models/user';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
    model: any = {};
    loading = false;
    User:any={};

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

        ngOnInit(){
            this.model.employeeType = 'default';
        }

         
    register() {
        if( this.doValidate(this.User)== true){
        this.loading = true;
        this.model['LeaveObject'] = new LeaveObject;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                }
                else{
            //   con
                }
    }
    

      doValidate(model:any)
    {
        var mail ="@"  
        if (this.model.username.match("@"))
        {
        return true;
        }
        else{
        alert("Please put the correct email address");
        }
        if(this.model.password !== this.model.confirmPassword){
            alert("Password and Confirm password should be same");
            return false;
        }
     
    }
}
