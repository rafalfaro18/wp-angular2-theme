import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private posts  = [];

  baseUrl = location.href.split('/')[2] === 'localhost:4200' ? 'http://localhost:8081/wp-json/wp/v2' : '/wp-json/wp/v2';

  constructor(private httpClient: HttpClient) { }

  get_posts(){
    this.httpClient.get(this.baseUrl + '/posts').subscribe((res : any[])=>{
        console.log(res);
        this.posts = res;
    });
  }

  ngOnInit() {
  }

}
