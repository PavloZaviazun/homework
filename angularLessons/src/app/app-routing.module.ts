import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsComponent} from './components/main/cars/cars.component';
import {CreationComponent} from './components/main/creation/creation.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: '', component: MainComponent, children: [
      {path: 'cars', component: CarsComponent},
      {path: 'creation', component: CreationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
