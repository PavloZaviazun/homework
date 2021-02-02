import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
