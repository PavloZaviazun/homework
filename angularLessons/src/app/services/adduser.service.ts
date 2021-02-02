import { Injectable } from '@angular/core';
import {IUserdb} from '../interfaces/userdb.interface';
import {usersDB} from '../db/usersDB';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  users: IUserdb[] = usersDB;
  constructor() { }
  addUser(user): void {
    this.users.push(user);
  }
}
