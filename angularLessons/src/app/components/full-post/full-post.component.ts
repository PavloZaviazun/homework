import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../interfaces/post.';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post = history.state;
    });
  }

  ngOnInit(): void {
  }

}
