import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';

export interface Blog {
  title: string;
  description: string;
  url: string;
}

export interface Category {
  name: string;
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

  blogs: Blog[];
  categories: Category[];

  ngOnInit(): void {
    // Get Data
    this.initializeData();
    console.log("URL :: " + this.router.url)
  }

  private initializeData() {
    this.blogs = [];
    this.categories = [];

    let url = environment.pagesApiUrl + "/home.json";
    if (this.router.url != "/") {
      console.log("Router URL :: " + this.router.url);
      url = environment.pagesApiUrl + this.router.url + ".json";
    }
    console.log("Page URL " + url);

    this.httpService.getData(url).subscribe(response => {

      if (response["blogs"] != null) {
        // Parse Blogs for Display in UI
        response["blogs"].forEach(blogContent => {
          let blog: Blog = <Blog>{};
          blog.title = blogContent["title"];
          blog.description = blogContent["description"];
          blog.url = blogContent["url"];
          this.blogs.push(blog);
        });
      }

      if (response["categories"] != null) {
        // Parse Categories for Display in UI
        response["categories"].forEach(categoryContent => {
          let category: Category = <Category>{};
          category.name = categoryContent["name"];
          category.url = categoryContent["url"];
          this.categories.push(category);
        });
      }
    });

  }
}
