import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {ButtonService} from '../../services/button.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, DoCheck {
  @Input() post: IPost;
  id: number;
  constructor(private buttonService: ButtonService) { }
  @Output()
  bubblePost = new EventEmitter();

  ngOnInit(): void {
  }

  choosePost(): void {
    this.bubblePost.emit(this.post);
    this.buttonService.setId(+this.post.id);
  }

  ngDoCheck(): void {
    this.id = this.buttonService.getId().getValue();
  }
}
