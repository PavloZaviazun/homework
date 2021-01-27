import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import {UsersResolveService} from './services/users-resolve.service';
import {PostsResolveService} from './services/posts-resolve.service';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {usersData: UsersResolveService}},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostsResolveService}}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
