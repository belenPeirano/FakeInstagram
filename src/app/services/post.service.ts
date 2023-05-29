import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Post[] {

    return [];
  }
}
