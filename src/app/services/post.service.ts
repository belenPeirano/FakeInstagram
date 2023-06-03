import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts: Post[] = [
    {
      photoPath: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
      user_id: 1
    },
    {
      photoPath: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
      user_id: 2
    },
    {
      photoPath: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
      user_id: 1
    },
    {
      photoPath: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
      user_id: 2
    },
  ]

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }
}
