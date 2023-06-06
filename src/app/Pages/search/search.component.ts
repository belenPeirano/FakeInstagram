import { Component, inject } from '@angular/core';
import { Post } from 'src/app/Interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  postList: Post[] = [];
  postService: PostService = inject(PostService);
  searchTerm: string = '';

  constructor() {
    this.postList = this.postService.getPosts();
  }

  get filteredPosts(): Post[] {
    if (this.searchTerm.trim() === '') return this.postList;
    else {
      const lowerCaseSearchText = this.searchTerm.toLowerCase().trim();
        const filteredPosts = this.postList.filter((post) =>
          post.tag.toLowerCase().includes(lowerCaseSearchText)
        );
        return filteredPosts;
    }
  }
}
