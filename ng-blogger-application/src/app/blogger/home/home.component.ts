import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice/httpservice.service';

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

  constructor(private httpService: HttpserviceService) { }

  cards: HomePageCard[];

  ngOnInit(): void {
    // Get Data
    this.getData();
  }

  private getData() {
    this.cards = [];
    this.httpService.getData("https://amvijay.github.io/home/home.json").subscribe((response: HomePageCard[]) => {
      response.forEach(element => {
        console.log("Element :: " + element.title);
        this.cards.push(element);
      });
    });
  }
}
