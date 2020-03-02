import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';

import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BlogComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    MaterialModule,
    RoutingModule
  ],
  exports: [
    BlogComponent,
    HeaderComponent,
    RoutingModule
  ]
})
export class BloggerModule { }
