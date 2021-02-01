import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './user/components/users/users.component';
const routes: Routes = [
  {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
