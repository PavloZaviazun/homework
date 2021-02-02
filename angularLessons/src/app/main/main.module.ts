import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { MainComponent } from './components/main/main.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from '../services/users.service';


@NgModule({
  declarations: [UsersComponent, UserComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class MainModule { }
