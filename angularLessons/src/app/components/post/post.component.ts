import {Component, Input, OnInit, Output, EventEmitter, DoCheck} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {ButtonService} from '../../services/button.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  id: number;
  constructor(private buttonService: ButtonService) { }
  @Output()
  bubblePost = new EventEmitter<IPost>();

  ngOnInit(): void {
    this.id = this.buttonService.getId().getValue();
  }

  choosePost(): void {
    this.bubblePost.emit(this.post);
    this.buttonService.setId(this.post.id);
  }

}
