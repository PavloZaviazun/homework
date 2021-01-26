import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IUser} from '../interfaces/user.Interface';
import {IPost} from '../interfaces/post.Interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  bubblePosts = new EventEmitter<IPost>();
  constructor() { }

  ngOnInit(): void {
  }
}
