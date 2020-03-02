import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private httpservice: HttpserviceService) { }

  content: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpservice.getData("https://amvijay.github.io/sample.json").subscribe(response => {
      this.content = response["content"];
    });
  }


}
