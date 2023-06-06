import { Injectable } from '@angular/core';
import { Post } from '../Interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [
    {
      id: '0',
      photoPath:
        'https://el-pais.brightspotcdn.com/dims4/default/3964afe/2147483647/strip/true/crop/995x684+15+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2021%2F10%2F24%2F61760ad7739c3.jpeg',
      tag: 'argentinos',
      user_id: '0',
    },
    {
      id: '1',
      photoPath:
        'https://el-pais.brightspotcdn.com/dims4/default/397a63c/2147483647/strip/true/crop/993x683+2+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2019%2F07%2F27%2F5d3d00b09d3e5.jpeg',
      tag: 'argentinos',
      user_id: '0',
    },
    {
      id: '2',
      photoPath:
        'https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F12%2F2021%2F07%2FBergessio-copia-1000x750.jpg',
      tag: 'argentinos',
      user_id: '0',
    },
    {
      id: '3',
      photoPath:
        'https://a.espncdn.com/photo/2022/1216/r1107386_1296x729_16-9.jpg',
      tag: 'uruguayos',
      user_id: '1',
    },
    {
      id: '4',
      photoPath:
        'https://www.debate.com.uy/__export/1674493991805/sites/debate/img/2023/01/23/disexo_sin_txtulo_-_2023-01-23t140730_039.png_1241476227.png',
      tag: 'uruguayos',
      user_id: '1',
    },
    {
      id: '5',
      photoPath:
        'https://imagenes.montevideo.com.uy/imgnoticias/202301/_W933_80/831428.jfif',
      tag: 'uruguayos',
      user_id: '1',
    },
  ];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  getPostsByUser(userId: string) {
    const userPosts = this.posts.map((post) => post.user_id === userId)
    return userPosts;
  }

  getPostById(postId: string) {
    const post = this.posts.map((post) => post.id === postId)
    return post;
  }
}
