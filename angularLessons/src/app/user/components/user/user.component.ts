import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.Interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  @Input() user: IUser;
  ngOnInit(): void {
  }

  showUser(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }
}
