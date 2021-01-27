import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute) {


    activatedRoute.data.subscribe(posts => this.posts = posts.postsData);
  }

  ngOnInit(): void {
  }

}