import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Interfaces/post';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() post!: Post;
  user!: User;
  usersService = new UsersService();

 constructor() {
 }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const userId = this.post?.user_id;
    console.log(userId)
    this.user = this.usersService.getUser(userId) as User; // Asignar un valor por defecto si el usuario no se encuentra
    console.log(this.user)
  }
}
