import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  flag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:8080/users');
  }

  saveUser(form: HTMLFormElement): Observable<any> {
    const formData = new FormData(form);
    const firstName = form.get('firstName').value;
    formData.append('firstName', firstName);
    return this.httpClient.post<string>('http://localhost:8080/user/save', formData, {observe: 'response'});
  }

  changeFlag = () => {
    this.flag.next(!this.flag.getValue());
  }
  returnFlag = () => {
    return this.flag;
  }
}
