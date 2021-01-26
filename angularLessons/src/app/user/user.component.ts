import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IUser} from '../../interfaces/user.Interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  bubblePosts = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
