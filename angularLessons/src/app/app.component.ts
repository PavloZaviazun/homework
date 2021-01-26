import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from './service/post.service';
import {IPost} from './interfaces/post.Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
constructor(private postService: PostService) {
}
  posts: IPost[];
post: IPost;
  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
  getBubblePost(post): void {
    this.post = post;
  }
}
