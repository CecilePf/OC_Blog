import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLike: number = 0;

  constructor() { 
    console.log('construct pop list item');
  }

  ngOnInit() {
    this.postDate = new Date();
  }

  onLike() {
    this.postLike = this.postLike + 1;
    console.log(this.postLike);
  }

  onDislike() {
    this.postLike -= 1;
    console.log(this.postLike);
  }

}
