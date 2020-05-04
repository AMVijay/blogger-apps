import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';

export interface HomePageCard {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: BloggerHttpService,
    private router: Router) { }

  cards: HomePageCard[];

  ngOnInit(): void {
    // Get Data
    this.getData();
    console.log("URL :: " + this.router.url)
  }

  private getData() {
    this.cards = [];
    let url = environment.homeUrl;
    if (this.router.url != "/") {
      console.log("Router URL :: " + this.router.url);
      url = environment.apiUrl + this.router.url + ".json";
    }

    console.log("Home Page URL " + url);
    this.httpService.getData(url).subscribe((response: HomePageCard[]) => {
      response.forEach(element => {
        this.cards.push(element);
      });
    });
  }
}
