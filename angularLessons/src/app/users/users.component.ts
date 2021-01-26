import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {IUser} from '../interfaces/user.Interface';
import {IPost} from '../interfaces/post.Interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }
  users: IUser[];
  posts: IPost[];
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }
  getBubblePosts(posts): void {
    this.posts = posts;
  }

}
