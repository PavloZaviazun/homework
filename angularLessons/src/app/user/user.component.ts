import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IUser} from '../../interfaces/user.Interface';
import {PostsService} from '../../services/posts.service';
import {IPost} from '../../interfaces/post.Interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  bubblePosts = new EventEmitter();
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }
  getPostsOfUser(id): void {
    this.postsService.getPosts(id).subscribe(posts => this.bubblePosts.emit(posts));
  }


}
