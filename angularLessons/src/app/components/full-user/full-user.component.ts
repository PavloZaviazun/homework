import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user: IUser;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state;
    });
  }

  ngOnInit(): void {
  }

}
