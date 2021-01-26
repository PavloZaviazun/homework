import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {IPost} from '../../interfaces/post.Interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }
  posts: IPost[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postsService.getPosts(value.id).subscribe(posts => this.posts = posts);
    });
  }

}
