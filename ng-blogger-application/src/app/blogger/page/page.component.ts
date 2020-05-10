import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';

export interface PageCard {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private httpService: BloggerHttpService,
    private router: Router) { }

  cards: PageCard[];

  ngOnInit(): void {
    // Get Data
    this.initializeData();
    console.log("URL :: " + this.router.url)
  }

  private initializeData() {
    this.cards = [];
    let url = environment.pagesApiUrl + "/home.json";
    if (this.router.url != "/") {
      console.log("Router URL :: " + this.router.url);
      url = environment.pagesApiUrl + this.router.url + ".json";
    }

    console.log("Page URL " + url);
    this.httpService.getData(url).subscribe((response: PageCard[]) => {
      response.forEach(element => {
        this.cards.push(element);
      });
    });
  }
}
