import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BloggerModule } from './blogger/blogger.module';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
