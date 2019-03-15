import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  productsObservable : any ; 

  baseUrl = location.href.split('/')[2] === 'localhost:4200' ? 'http://localhost:8081/wp-json/wp/v2' : '/wp-json/wp/v2';

  constructor(private dataService: DataService) { }

  get_posts(){
    this.productsObservable = this.dataService.get_posts();
  }

  ngOnInit() {
  }

}
