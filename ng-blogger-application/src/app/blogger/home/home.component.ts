import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpservice: HttpserviceService) { }

  content: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpservice.getHtmlContent("https://amvijay.github.io/sample.json").subscribe(response => {
      this.content = response["content"];
    });
  }


}
