import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    MaterialModule,
    RoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    RoutingModule
  ]
})
export class BloggerModule { }
