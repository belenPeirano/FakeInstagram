import { Component } from '@angular/core';
import { Post } from 'src/app/Interfaces/post';
import { User } from 'src/app/Interfaces/user';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-slider',
  template: `
    <div class="slider">
      <app-post *ngFor="let post of posts" [post]="post"></app-post>
    </div>
  `,
  styleUrls: ['./slider.component.css']
})

export class SliderComponent {
  posts: Post[] = [];
  postService = new PostService;

  constructor() {
    this.posts = this.postService.getPosts();
  }
}
