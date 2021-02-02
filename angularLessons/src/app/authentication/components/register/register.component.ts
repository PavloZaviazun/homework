import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdduserService} from '../../../services/adduser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private adduserService: AdduserService) { }
  loginRegister = new FormControl('', Validators.required);
  passwordRegister = new FormControl('', Validators.required);
  formRegister = new FormGroup({
    loginRegister: this.loginRegister,
    passwordRegister: this.passwordRegister
  });
  ngOnInit(): void {
  }
  sendData(): void {
    if (!!this.loginRegister.value && !!this.passwordRegister.value) {
      this.adduserService.addUser({login: this.loginRegister.value, password: this.passwordRegister.value});
    }
  }
}
