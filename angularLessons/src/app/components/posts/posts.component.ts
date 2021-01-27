import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPost} from '../../interfaces/post.';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private activatedRote: ActivatedRoute) {
    activatedRote.data.subscribe(value => this.posts = value.postsData);
  }
  posts: IPost[];

  ngOnInit(): void {
  }

}
