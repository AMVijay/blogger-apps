import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpserviceService } from './shared/httpservice/httpservice.service';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [BlogComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    RoutingModule
  ],
  exports: [
    BlogComponent,
    HeaderComponent
  ],
  providers: [
    HttpserviceService
  ]
})
export class BloggerModule { }
