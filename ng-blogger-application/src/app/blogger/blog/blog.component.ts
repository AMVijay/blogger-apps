import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser';

const METATAGS = ["title", "author", "lastUpdatedDate", "keywords"];
const METATAG_NAME_PLACEHOLDER = (placeholder: string) => `name = ${placeholder}`;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor(private httpService: BloggerHttpService,
    private titleService: Title,
    private metaDataService: Meta,
    private router: Router) { }

  markdownFilePath: string;

  ngOnInit(): void {
    this.initializeData();
  }

  ngOnDestroy(): void {
    console.log("Blog Component Destroyed.");
    METATAGS.forEach(metatag => {
      console.log("metatag :: " + metatag);
      this.metaDataService.removeTag(METATAG_NAME_PLACEHOLDER(metatag));
    });
    this.titleService.setTitle("AM.VIJAY - Blogger Application");
  }

  /**
   * Method to initialize Data for Page.
   */
  initializeData() {
    // Get MetaData
    let metadataUrl = environment.metadataApiUrl + this.router.url + ".json";
    this.markdownFilePath = null;
    this.httpService.getData(metadataUrl).subscribe(response => {
      if (response != null) {
        this.titleService.setTitle(response['title']);
        METATAGS.forEach(metatag => {
          this.metaDataService.addTag({ name: metatag, content: response[metatag] });
        });

        if (response['content'] != null) {
          this.markdownFilePath = response['content'];
        }
        else {
          this.markdownFilePath = environment.blogApiUrl + this.router.url + ".md"
        }
      }
    },
      (error) => {
        this.markdownFilePath = environment.blogApiUrl + this.router.url + ".md"
      });
  }

}
