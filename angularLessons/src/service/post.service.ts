import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interfaces/post.Interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {
  }
  public getPosts(): Observable<IPost[]>  {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
