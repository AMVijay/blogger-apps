import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice/httpservice.service';
import { Router } from '@angular/router';

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

  constructor(private httpService: HttpserviceService,
    private router: Router) { }

  cards: HomePageCard[];

  ngOnInit(): void {
    // Get Data
    this.getData();

    console.log("URL :: " + this.router.url)
  }

  private getData() {
    this.cards = [];
    let url = "https://amvijay.github.io/home/home.json";
    if(this.router.url != "/"){
      url = "https://amvijay.github.io"+this.router.url+"content.json";
    }

    this.httpService.getData("https://amvijay.github.io/home/home.json").subscribe((response: HomePageCard[]) => {
      response.forEach(element => {
        this.cards.push(element);
      });
    });
  }
}
