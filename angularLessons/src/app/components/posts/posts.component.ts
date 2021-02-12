import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services';
import {IPost} from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  post: IPost;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

  getBubblePost(post: IPost): void {
    this.post = post;
  }
}
