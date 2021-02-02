import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }
  loginLogin = new FormControl('');
  passwordLogin = new FormControl('');
  formLogin = new FormGroup({
    loginLogin: this.loginLogin,
    passwordLogin: this.passwordLogin
  });
  loginFlag: boolean;
  ngOnInit(): void {
  }
  compareData(): void {
    this.loginFlag = this.loginService.logIn(this.loginLogin.value, this.passwordLogin.value);
    if (this.loginFlag) {
      this.router.navigate(['main/users']);
    }
    console.log(this.loginFlag);
  }
}
