import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'auth', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }