import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  productsObservable : any ;

  constructor(private dataService: DataService) { }

  get_posts(){
    this.productsObservable = this.dataService.get_posts();
  }

  ngOnInit() {
  }

}
