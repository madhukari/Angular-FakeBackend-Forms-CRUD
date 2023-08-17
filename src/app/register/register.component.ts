import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import {User } from '../_models/user';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    User:any={};

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

         
    register() {
        console.log("register");
        if( this.doValidate(this.User)== true){
        this.loading = true;
        console.log(this.model);
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
        console.log("valid");
        if(this.model.password !== this.model.confirmPassword){
            alert("Password and Confirm password should be same");
            return false;
        }
     
    }
}
