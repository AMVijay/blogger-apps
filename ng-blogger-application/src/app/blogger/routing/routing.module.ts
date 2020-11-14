import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { PageComponent } from '../page/page.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "page", 
    children: [
      {
        path : "**",
        component: PageComponent
      }
    ]
  },
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
  ]
})
export class BloggerRouterModule { }
