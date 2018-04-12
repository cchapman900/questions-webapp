import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard/home/dashboard-home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { CallbackComponent } from './components/callback/callback.component';

import {AuthGuardService as AuthGuard} from './services/auth/auth-guard.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: '', component: DashboardHomeComponent },
    { path: 'profile', component: ProfileComponent }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
