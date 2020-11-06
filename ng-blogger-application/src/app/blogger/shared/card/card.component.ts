import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("card-title")
  cardTitle: string;

  @Input("last-updated-date")
  lastUpdatedDate : string;

  @Input("url")
  url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
