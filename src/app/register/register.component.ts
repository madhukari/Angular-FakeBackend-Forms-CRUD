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
        this.doValidate(this.User);
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
    // doValidate(model: any) {
    //     throw new Error("Method not implemented.");
    // }

      doValidate(model:any)
    {
        console.log("valid");
        if(this.model.password !== this.model.confirmPassword){
            alert("Password and Confirm password should be same");

        }
    // if (document.appointment.requiredname.value =="")
    // {
    // alert("Please put your name");
    // document.appointment.requiredname.focus();
    // return false;
    // }
    // var readmail = document.appointment.requiredemail;
    // var checkatsymbol = readmail.indexof("@");
    // var checkdotsymbol = readmail.lastindexof(".");
    // if (readmail.value =="" || checkatsymbol<1)
    // {
    // alert("Please put the correct email address");
    // document.appointment.requiredemail.focus();
    // return false;
    // }
    // if (document.appointment.requiredphone.value =="" )
    // {
    // alert("Please put your phone");
    // document.appointment.requiredphone.focus();
    // return false;
    // }
    // if (document.appointment.requireddate.value =="" )
    // {
    // alert("Please put your appointment date as DD/MM/YYYY");
    // document.appointment.requireddate.focus();
    // return false;
    // }
    // if (document.appointment.requiredtime.value =="")
    // {
    // alert("Please put your appointment time as HH:MM AM/PM");
    // document.appointment.requiredtime.focus();
    // return false;
    // }
    // return ( true );
    }
}
