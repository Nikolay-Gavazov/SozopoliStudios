import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { GuestGuard } from '../core/guards/guestGuard';
import { UserGuard } from '../core/guards/userGuard';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate:[GuestGuard] },
    { path: 'register', component: RegisterComponent, canActivate:[GuestGuard] },
    { path: 'logout', component: LogoutComponent,canActivate:[UserGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
