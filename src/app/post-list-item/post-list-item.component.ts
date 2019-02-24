import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { 
  }

  ngOnInit() {
    this.post.created_at = new Date();
  }

  onLike() {
    this.post.loveIts ++;
    console.log(this.post.loveIts);
  }

  onDislike() {
    this.post.loveIts --;
    console.log(this.post.loveIts);
  }

}
