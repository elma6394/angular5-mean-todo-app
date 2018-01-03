import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo/todo.service';
import { AuthService } from './user/auth.service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { TodoComponent } from '../app/todo/todo.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserService } from './user/user.service';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
// import { AccessGuard } from './user/login-activate-guard';
// import { LoginActivate } from './user/login-activate-guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodoComponent, data: {requiresLogin: true} },
  { path: 'todo/:id', component: TodoDetailsComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-account', component: ProfileComponent },
  { path: 'add-todo', component: AddTodoComponent },

  // { path: '', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailsComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TodoService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
