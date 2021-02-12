import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { CurrencyFullComponent } from './components/currency-full/currency-full.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyComponent,
    CurrencyFullComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
