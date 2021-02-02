import { Injectable } from '@angular/core';
import {usersDB} from '../db/usersDB';
import {IUserdb} from '../interfaces/userdb.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usersDB: IUserdb[] = usersDB;
  constructor() {
  }
  logIn(login: string, password: string): boolean {
    return !!usersDB.find(user => user.login === login && user.password === password);
  }
}
