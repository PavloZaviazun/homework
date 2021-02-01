import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostsService} from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ]
})
export class PostModule { }
