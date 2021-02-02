import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainModule} from './main.module';
import {MainComponent} from './components/main/main.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'users'},
      {path: 'users', component: UsersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
