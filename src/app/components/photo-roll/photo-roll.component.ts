import { Component } from '@angular/core';
import { Post } from 'src/app/Interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-photo-roll',
  templateUrl: './photo-roll.component.html',
  styleUrls: ['./photo-roll.component.css']
})
export class PhotoRollComponent {
  posts: Post[] = [];
  photoService = new PostService;

  constructor() {
    this.posts = this.photoService.getPosts();
  }
}
