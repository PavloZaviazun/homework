import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {IUsers} from '../../../interfaces/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUsers[];
  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit(): void {
  }

}
