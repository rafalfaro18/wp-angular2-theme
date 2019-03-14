import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  productsObservable : any ; 

  baseUrl = location.href.split('/')[2] === 'localhost:4200' ? 'http://localhost:8081/wp-json/wp/v2' : '/wp-json/wp/v2';

  constructor(private httpClient: HttpClient) { }

  get_posts(){
    this.productsObservable = this.httpClient.get(this.baseUrl + '/posts');
  }

  ngOnInit() {
  }

}
