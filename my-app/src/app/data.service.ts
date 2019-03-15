import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = location.href.split('/')[2] === 'localhost:4200' ? 'http://localhost:8081/wp-json/wp/v2' : '/wp-json/wp/v2';

  constructor(private httpClient : HttpClient) { }

  get_posts(){
    return this.httpClient.get(this.baseUrl + '/posts');
  }
}
