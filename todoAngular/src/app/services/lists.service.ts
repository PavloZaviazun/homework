import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../config';
import {Observable} from 'rxjs';
import {ITodoList} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private httpClient: HttpClient) { }
  getTodoLists(): Observable<ITodoList[]> {
    return this.httpClient.get<ITodoList[]>(URL.lists);
  }
  saveTodoList(title: string): Observable<string> {
    return this.httpClient.post<string>(URL.list + '/save', title);
  }
}
