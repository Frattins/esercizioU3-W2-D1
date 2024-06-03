import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ActivePostsComponent } from './active-posts.component';

const routes: Route[] = [

{
  path:'',
  component:ActivePostsComponent
}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivePostsRoutingModule { }
