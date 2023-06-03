import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[] = [
    {
      id: 1,
      username: 'agus_193',
      userFullName: 'Mujer de google',
      userPhotoPath: "../assets/images/foto1.jfif",
      postsList: [],
    },
    {
      id: 2,
      username: 'mauro_23',
      userFullName: 'Hombre de google',
      userPhotoPath: "../assets/images/foto2.jfif",
      postsList: [],
    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserById(user_id: number): User | undefined {
    return this.users.find(user => user.id === user_id);
  }
}
