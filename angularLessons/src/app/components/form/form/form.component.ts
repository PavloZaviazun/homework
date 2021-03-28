import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  flag: boolean;

  constructor(private userService: UserService) { }
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
    const form = document.forms.namedItem('userForm');
    this.userService.saveUser(form).subscribe(el => console.log(el));
  }

  ngOnInit(): void {
    console.log('her');
  }

  changeFlag1 = () => {
    this.userService.changeFlag();
    this.userService.returnFlag().subscribe(el => {
      this.flag = el;
      this.ngOnInit();
    });
  }
}
