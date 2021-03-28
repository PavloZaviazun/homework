import {Component, Input, OnInit} from '@angular/core';
import {FormComponent} from '../../form/form/form.component';
import {IUser} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
