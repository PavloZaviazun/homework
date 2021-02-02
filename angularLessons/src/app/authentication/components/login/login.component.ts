import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';

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
  loginFlag = true;
  userName: string;
  ngOnInit(): void {
  }
  compareData(): void {
    const user = this.loginService.logIn(this.loginLogin.value, this.passwordLogin.value);
    this.userName = user?.login;
    this.loginFlag = !!user;
    if (user) {
      this.router.navigate(['main']);
    }
  }
}
