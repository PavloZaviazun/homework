import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../interfaces/post.interface';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})

export class PostsResolveService implements Resolve<IPost[]>{

  constructor(private postsService: PostsService) { }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsService.getPosts();
  }
}
