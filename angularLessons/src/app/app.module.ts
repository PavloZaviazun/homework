import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users/users.component';
import { UserComponent } from './components/user/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './components/form/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ForRedirectComponent } from './components/for-redirect/for-redirect.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FormComponent,
    ForRedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
