import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private httpService: BloggerHttpService,
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
