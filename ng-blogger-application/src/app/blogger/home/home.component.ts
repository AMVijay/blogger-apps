import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';

export interface Blog {
  title: string;
  url: string;
  lastUpdatedDate: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogs: Blog[];

  constructor(private httpService: BloggerHttpService) { }

  ngOnInit(): void {
    // Get Data
    this.initializeData();
  }


  initializeData() {
    this.blogs = [];
    let url = environment.pagesApiUrl + "/home.json";
    this.httpService.getData(url).subscribe(response => {
      if (response["blogs"] != null) {
        // Parse Blogs for Display in UI
        response["blogs"].forEach(blogContent => {
          let blog: Blog = <Blog>{};
          blog.title = blogContent["title"];
          blog.url = blogContent["url"];
          blog.lastUpdatedDate = blogContent["lastUpdatedDate"];
          this.blogs.push(blog);
        });
      }
    });

  }

}
