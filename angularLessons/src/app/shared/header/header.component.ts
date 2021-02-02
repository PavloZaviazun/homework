import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IUserdb} from '../../interfaces/userdb.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: IUserdb;
  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation().extras.state as IUserdb;
  }

  ngOnInit(): void {
  }

}
