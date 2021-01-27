import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(users => this.users = users.usersData);
  }

  ngOnInit(): void {
  }

}
