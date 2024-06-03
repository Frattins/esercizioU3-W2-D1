import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Route[] = [
  {
    path: 'active',
    loadChildren: () => import("./active-posts/active-posts.module").then(m =>m.ActivePostsModule)
  },
  {
    path: 'inactive',
    loadChildren: () => import("./inactive-posts/inactive-posts.module").then(m =>m.InactivePostsModule)
  },
  {
    path: "post/:id",
    component: PostDetailComponent
  },
  {
    path: '',
    loadChildren: () => import("./homepage/homepage.module").then(m =>m.HomepageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
