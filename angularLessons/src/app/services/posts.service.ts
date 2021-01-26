import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post.Interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(id): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
