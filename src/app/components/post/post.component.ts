import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Interfaces/post';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() post!: Post;
  user!: User;
  userService = new UserService();

 constructor() {
 }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const userId = this.post?.user_id;
    this.user = this.userService.getUserById(userId) as User; // Asignar un valor por defecto si el usuario no se encuentra
  }
}
