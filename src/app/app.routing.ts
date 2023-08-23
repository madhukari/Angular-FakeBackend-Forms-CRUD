import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ManagerComponent } from './manager/manager.component';
import { LeaveRequestComponent } from './leaveRequest/leaverequest.component';

const appRoutes: Routes = [
    { path: 'user', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'manager', component: ManagerComponent},
    { path: 'leaveRequest', component: LeaveRequestComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);