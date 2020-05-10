import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { PageComponent } from '../page/page.component';

const routes: Routes = [
  { path: "", component: PageComponent },
  { path: "hadoop", component: PageComponent },
  {
    path: "blog",
    children: [
      {
        path: "**",
        component: BlogComponent
      }
    ]
  },
  {
    path: "**", component: BlogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
    // RouterModule.forRoot(routes)
  ]
})
export class BloggerRouterModule { }
