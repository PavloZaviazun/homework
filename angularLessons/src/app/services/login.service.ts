import { Injectable } from '@angular/core';
import {IUserdb} from '../interfaces/userdb.interface';
import {usersDB} from '../db/usersDB';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usersDB: IUserdb[] = usersDB;
  constructor() {
  }
  logIn(login: string, password: string): IUserdb {
    return usersDB.find(user => user.login === login && user.password === password);
  }
}
