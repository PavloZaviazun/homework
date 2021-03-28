import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForRedirectComponent} from './components/for-redirect/for-redirect.component';

const routes: Routes = [
  {path: 'her', component: ForRedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
