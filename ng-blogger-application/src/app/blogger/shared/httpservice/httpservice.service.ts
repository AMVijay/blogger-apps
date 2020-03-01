import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
 
  /**
   * Method to get HTMLContent from URL location.
   * @param url as String.
   */
  public getHtmlContent(url: string){
    return this.http.get(url);
  }

}
