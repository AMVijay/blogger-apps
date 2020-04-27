import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BloggerModule } from './blogger/blogger.module';
import { HttpserviceService } from './blogger/shared/httpservice/httpservice.service';
import { BloggerRouterModule } from './blogger/routing/routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BloggerModule,
    BloggerRouterModule,
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
