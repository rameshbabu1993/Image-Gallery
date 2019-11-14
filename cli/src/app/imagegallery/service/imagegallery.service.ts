import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders, HttpClientModule  } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ImageGalleryService {
  
  constructor(private http: HttpClient) {}

  /** 
   *  To fetch public feed using tags as user input
   *  @param tags
   *  @returns array of object of filcker feeds.
   */  
  getFeeds(
    tags: string,
  ): Observable<any> {
    
    let url = `${environment["baseUrl"]}/getFeeds`;
    let params = {
      tags: tags,
    };

    return this.http.get<any>(url, {params: params});
  }

  
}
