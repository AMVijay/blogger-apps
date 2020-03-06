import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private httpservice: HttpserviceService,
    private router:Router) { }

  content: string;
  markdownFilePath: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.markdownFilePath = "https://amvijay.github.io/blog" + this.router.url + ".md"
    console.log("this.markdownFilePath :: " + this.markdownFilePath);
  }


}
