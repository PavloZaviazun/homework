import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from '../login/components/login/login.component';

const routes: Routes = [
  {path: '', component: RegisterComponent, children: [
      {path: 'register', component: RegisterComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
