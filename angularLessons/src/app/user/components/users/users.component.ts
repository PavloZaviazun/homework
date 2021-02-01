import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../interfaces/user.Interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
