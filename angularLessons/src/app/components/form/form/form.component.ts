import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  firstName = new FormControl('');
  lastName = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  avatar = new FormControl('');



  userForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
    email: this.email,
    password: this.password,
    avatar: this.avatar
  });
  sendData = () => {
    console.log('her');
  }

  ngOnInit(): void {
  }

}
