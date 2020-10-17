import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BloggerHttpService } from '../shared/httpservice/httpservice.service';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser';

const METATAGS = ["title", "author", "lastUpdatedDate", "keywords"];
const METATAG_NAME_PLACEHOLDER = (placeholder: string) => `name = ${placeholder}`;
const BLOG_NAME_REG_EX = "/blog(.*)"


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
  pageHeader : string;
  tags: string[];  


  ngOnInit(): void {
    this.initializeData();
  }

  ngOnDestroy(): void {
    // console.log("Blog Component Destroyed.");
    METATAGS.forEach(metatag => {
      // console.log("metatag :: " + metatag);
      this.metaDataService.removeTag(METATAG_NAME_PLACEHOLDER(metatag));
    });
    this.titleService.setTitle("Vijayaraaghavan Manoharan");
  }

  /**
   * Method to initialize Data for Page.
   */
  initializeData() {

    let blogName = this.router.url.match(BLOG_NAME_REG_EX)[1];

    // Get MetaData
    let metadataUrl = environment.metadataApiUrl + blogName + ".json";
    this.markdownFilePath = null;
    this.httpService.getData(metadataUrl).subscribe(response => {
      if (response != null) {
        // Update Meta Data
        this.updatePageMetaData(response);
        this.pageHeader = response['title'];
        this.titleService.setTitle(response['title']);
        this.tags = response['tags'];

        if (response['content'] != null) {
          this.markdownFilePath = response['content'];
        }
        else {
          this.markdownFilePath = environment.blogApiUrl + blogName + ".md"
        }
      }
    },
      (error) => {
        this.markdownFilePath = environment.blogApiUrl + blogName + ".md"
      });
  }

  /**
   * Update Page MetaData
   */
  updatePageMetaData(response: Object) {
    METATAGS.forEach(metatag => {
      this.metaDataService.addTag({ name: metatag, content: response[metatag] });
    });
  }

}
