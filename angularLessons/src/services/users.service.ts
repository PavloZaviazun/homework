import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.Interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClientModule: HttpClient) {
  }
  getUsers(): Observable<IUser[]> {
    return this.httpClientModule.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

}
