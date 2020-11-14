import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { BloggerHttpService } from './shared/httpservice/httpservice.service';
import { BloggerRouterModule } from './routing/routing.module';
import { BloggerComponent } from './blogger.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BlogComponent, HeaderComponent, PageComponent, BloggerComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    BloggerRouterModule,
    MarkdownModule.forRoot({ loader: HttpClientModule })
  ],
  exports: [
    BloggerComponent
  ],
  providers: [BloggerHttpService]
})
export class BloggerModule { }
