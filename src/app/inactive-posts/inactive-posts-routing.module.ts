import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InactivePostsComponent } from './inactive-posts.component';

const routes: Route[] = [

  {
    path:'',
    component:InactivePostsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactivePostsRoutingModule { }
