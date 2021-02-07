import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CarsComponent } from './components/main/cars/cars.component';
import { CreationComponent } from './components/main/creation/creation.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CarComponent } from './components/main/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarsComponent,
    CreationComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
