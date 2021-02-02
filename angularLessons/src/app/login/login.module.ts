import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import {HeaderComponent} from '../shared/header/header.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
