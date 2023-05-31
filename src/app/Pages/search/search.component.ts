import { Component, inject, NgModule } from '@angular/core';
import { User, Post } from 'src/app/Interfaces/post';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  usersList: User[] = [];
  usersService: UsersService = inject(UsersService);
  searchTerm: string = '';

  constructor() {
    this.usersList = this.usersService.getUsers();
  }

  get filteredUsersList(): User[] {
    if (this.searchTerm.trim() === '') return this.usersList;
    else {
      const lowerCaseSearchText = this.searchTerm.toLowerCase().trim();
      return this.usersList.map((user) => {
        const filteredPosts = user.postsList.filter((post) =>
          post.tag.toLowerCase().includes(lowerCaseSearchText)
        );
        return { ...user, postsList: filteredPosts };
      });
    }
  }
}
