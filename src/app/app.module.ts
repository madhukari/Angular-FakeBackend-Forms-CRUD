import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { ManagerComponent } from './manager/manager.component';
import { RegisterComponent } from './register/index';
import { MatchPasswordDirective } from './directives/validatepassword.directive';
import {CustomvalidationService } from '../app/directives/customvalidaionService';
import { LeaveRequestComponent } from './leaveRequest/leaverequest.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        ManagerComponent,
        RegisterComponent,
        MatchPasswordDirective,
        LeaveRequestComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CustomvalidationService,
        {   
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }