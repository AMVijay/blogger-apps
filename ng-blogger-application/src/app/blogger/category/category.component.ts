import { Component, OnInit } from '@angular/core';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';

export interface Category {
  name: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: string[];

  constructor(private httpService:BloggerHttpService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    let url = "https://amvijay.github.io/categories.json"
    this.categories = [];
    this.httpService.getData(url).subscribe((response: Category[]) => {
        response.forEach(element => {
          this.categories.push(element.name);
        });
    });
  }

}
