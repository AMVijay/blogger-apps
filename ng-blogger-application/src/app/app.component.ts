import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from "rxjs/operators";

declare let gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-blogger-application';

  constructor(router: Router) {
    const navigationEvent = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );

    navigationEvent.subscribe( (e:NavigationEnd) => {
      gtag('config', 'UA-27752939-2',{'page_path':e.urlAfterRedirects});
    });

  }
}
