import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [BlogComponent, HeaderComponent, PageComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    BloggerRouterModule,
    MarkdownModule.forRoot({ loader: HttpClientModule })
  ],
  exports: [
    HeaderComponent,
    BloggerRouterModule
  ],
  providers: [BloggerHttpService]
})
export class BloggerModule { }
