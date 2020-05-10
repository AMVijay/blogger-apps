import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { BloggerHttpService } from './shared/httpservice/httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BloggerRouterModule } from './routing/routing.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [BlogComponent, HeaderComponent, PageComponent, CategoryComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    BloggerRouterModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClientModule })
  ],
  exports: [
    HeaderComponent,
    BloggerRouterModule
  ],
  providers: [BloggerHttpService]
})
export class BloggerModule { }
