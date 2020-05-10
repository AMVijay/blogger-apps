import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser';

export const METATAG_TITLE = "title";
export const METATAG_AUTHOR = "author";
export const METATAG_LASTUPDATED_DATE = "lastUpdatedDate";

export interface MetaData{
  title: string,
  lastUpdatedDate: string,
  keywords: string
}

@Component({
  selector: 'app-home',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor(private httpService: BloggerHttpService,
    private titleService: Title,
    private metaDataService: Meta,    
    private router: Router) { }
  

  content: string;
  markdownFilePath: string;

  ngOnInit(): void {
    this.initializeData();
  }

  ngOnDestroy(): void {
    console.log("Blog Component Destroyed.");
  }

  initializeData() {

    this.titleService.setTitle("AM.VIJAY - Blogger Application");

    // Get MetaData
    let metadataUrl = environment.metadataApiUrl + this.router.url + ".json";  
    this.httpService.getData(metadataUrl).subscribe((response : MetaData) => {
        if(response != null){
          this.titleService.setTitle(response.title);
          this.metaDataService.addTag({name: 'keywords',content: response.keywords});
          this.metaDataService.addTag({name: 'author', content: 'am.vijay@gmail.com'});
          this.metaDataService.addTag({name: 'lastUpdatedDate', content: response.lastUpdatedDate});
        }
    });

    this.markdownFilePath = environment.blogApiUrl + this.router.url + ".md"
    console.log("this.markdownFilePath :: " + this.markdownFilePath);
  }


}
