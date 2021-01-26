import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../interfaces/post.Interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input()
  post: IPost;
  @Output()
  bubblePost = new EventEmitter<IPost>();
  ngOnInit(): void {
  }
  choosePost(post): void {
    this.bubblePost.emit(post);
  }

}
