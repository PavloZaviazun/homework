import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class UsersModule { }
