import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users.service';
import { FullUserComponent } from './components/full-user/full-user.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  // exports: [
  //   HttpClientModule
  // ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
