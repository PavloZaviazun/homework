import { Injectable } from '@angular/core';
import {IUsers} from '../interfaces/users.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient)  { }
  getUsers(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
  }
}
