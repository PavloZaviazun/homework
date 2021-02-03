import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CarsComponent } from './components/main/cars/cars.component';
import { CreationComponent } from './components/main/creation/creation.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarsComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
