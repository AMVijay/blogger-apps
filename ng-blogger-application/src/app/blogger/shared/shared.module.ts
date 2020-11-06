import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { BloggerRouterModule } from '../routing/routing.module';
import { CardComponent } from './card/card.component'



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    BloggerRouterModule,
    HttpClientModule
  ],
  exports: [
    CardComponent
  ],
  providers: []
})
export class SharedModule { }
