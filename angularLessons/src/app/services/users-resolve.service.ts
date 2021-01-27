import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IUser} from '../interfaces/user.interface';
import {Observable} from 'rxjs';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]>{

  constructor(private usersService: UsersService) { }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.usersService.getUsers();
  }
}
