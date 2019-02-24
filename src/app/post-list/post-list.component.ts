import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[];
  
  // @Input() postTitle: string;
  // @Input() postContent: string;
  // @Input() postDate: Date;
  // @Input() postLike: number = 0;

  constructor(private appcomponent : AppComponent) { 
  }

  ngOnInit() {
    this.posts = this.appcomponent.posts;
  }

}
