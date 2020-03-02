import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"how-https-works", component: BlogComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  
  ]
})
export class RoutingModule { }
