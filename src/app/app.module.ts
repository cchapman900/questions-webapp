import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './components/auth/callback/callback.component';

import { ROUTES } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { DashboardSidebarComponent } from './components/dashboard/sidebar/dashboard-sidebar.component';
import { DashboardHomeComponent } from './components/dashboard/home/dashboard-home.component';
import { ListQuestionsComponent } from './components/question/list/list-questions.component';
import {QuestionService} from './services/question/question.service';
import { QuestionComponent } from './components/question/question.component';
import { GetQuestionComponent } from './components/question/get/get-question.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CallbackComponent,
    DashboardComponent,
    ProfileComponent,
    DashboardSidebarComponent,
    DashboardHomeComponent,
    ListQuestionsComponent,
    QuestionComponent,
    GetQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    AuthGuard,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
