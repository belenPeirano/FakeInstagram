import { Injectable } from '@angular/core';
import { Post, User } from '../Interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersList: User[] = [
    {
      id: '0',
      username: '@gbergessio',
      userFullName: 'Gonzalo Bergessio',
      userPhotoPath: '',
      postsList: [
        {
          id: '0',
          photoPath:
            'https://el-pais.brightspotcdn.com/dims4/default/3964afe/2147483647/strip/true/crop/995x684+15+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2021%2F10%2F24%2F61760ad7739c3.jpeg',
          tag: 'argentinos',
        },
        {
          id: '1',
          photoPath:
            'https://el-pais.brightspotcdn.com/dims4/default/397a63c/2147483647/strip/true/crop/993x683+2+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2019%2F07%2F27%2F5d3d00b09d3e5.jpeg',
          tag: 'argentinos',
        },
        {
          id: '2',
          photoPath:
            'https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F12%2F2021%2F07%2FBergessio-copia-1000x750.jpg',
          tag: 'argentinos',
        },
      ],
    },
    {
      id: '1',
      username: '@gigliotti09',
      userFullName: 'Emmanuel Gigliotti',
      userPhotoPath: '',
      postsList: [
        {
          id: '0',
          photoPath:
            'https://storage.googleapis.com/tenfield-storage/2022/10/35613d93-gigliotti-festejo-gol-vs-cerrito-apertura.jpg',
          tag: 'argentinos',
        },
        {
          id: '1',
          photoPath:
            'https://el-pais.brightspotcdn.com/dims4/default/d03f0fb/2147483647/strip/true/crop/1551x1066+25+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2022%2F08%2F19%2F62ffe8389344e.jpeg',
          tag: 'argentinos',
        },
        {
          id: '2',
          photoPath:
            'https://soydelrojo.com/wp-content/uploads/2022/05/51ab69c7099bdae20e6a2d2d1eb54e8f67a7b8a1.jfif_.jpg',
          tag: 'argentinos',
        },
      ],
    },
    {
      id: '2',
      username: '@frangundez10',
      userFullName: 'Franco Fagundez',
      userPhotoPath: '',
      postsList: [
        {
          id: '0',
          photoPath:
            'https://a.espncdn.com/photo/2022/1216/r1107386_1296x729_16-9.jpg',
          tag: 'uruguayos',
        },
        {
          id: '1',
          photoPath:
            'https://www.debate.com.uy/__export/1674493991805/sites/debate/img/2023/01/23/disexo_sin_txtulo_-_2023-01-23t140730_039.png_1241476227.png',
          tag: 'uruguayos',
        },
        {
          id: '2',
          photoPath:
            'https://imagenes.montevideo.com.uy/imgnoticias/202301/_W933_80/831428.jfif',
          tag: 'uruguayos',
        },
      ],
    },
    {
      id: '3',
      username: '@didiMessi22',
      userFullName: 'Diego Zabala',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'uruguayos' },
        { id: '1', photoPath: '', tag: 'uruguayos' },
        { id: '2', photoPath: '', tag: 'uruguayos' },
      ],
    },
    {
      id: '4',
      username: '@condesteban',
      userFullName: 'Esteban Conde',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'uruguayos' },
        { id: '1', photoPath: '', tag: 'uruguayos' },
        { id: '2', photoPath: '', tag: 'uruguayos' },
      ],
    },
    {
      id: '5',
      username: '@chino20recoba',
      userFullName: 'Alvaro Recoba',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'uruguayos' },
        { id: '1', photoPath: '', tag: 'uruguayos' },
        { id: '2', photoPath: '', tag: 'uruguayos' },
      ],
    },
    {
      id: '6',
      username: '@rochet01sergio',
      userFullName: 'Sergio Rochet',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'uruguayos' },
        { id: '1', photoPath: '', tag: 'uruguayos' },
        { id: '2', photoPath: '', tag: 'uruguayos' },
      ],
    },
    {
      id: '7',
      username: '@polentaforever',
      userFullName: 'Diego Polenta',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'uruguayos' },
        { id: '1', photoPath: '', tag: 'uruguayos' },
        { id: '2', photoPath: '', tag: 'uruguayos' },
      ],
    },
    {
      id: '8',
      username: '@fabinoguerabolso',
      userFullName: 'Fabian Noguera',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: '', tag: 'argentinos' },
        { id: '1', photoPath: '', tag: 'argentinos' },
        { id: '2', photoPath: '', tag: 'argentinos' },
      ],
    },
    {
      id: '9',
      username: '@brianocampo',
      userFullName: 'Brian Ocampo',
      userPhotoPath: '',
      postsList: [
        { id: '0', photoPath: 'https://el-pais.brightspotcdn.com/dims4/default/878ebf8/2147483647/strip/true/crop/2367x1627+0+1/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2021%2F10%2F27%2F617a06c5a959a.jpeg', tag: 'uruguayos' },
        { id: '1', photoPath: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte315a28cd8c92355/61cf6c486eb2f667d4d4a2b1/c59e1742-ocampo-nueva.jpg?auto=webp&format=pjpg&width=3840&quality=60', tag: 'uruguayos' },
        { id: '2', photoPath: 'https://storage.googleapis.com/tenfield-storage/2022/05/75600c5c-ocampo-camisa-nacional-libertadores.jpg', tag: 'uruguayos' },
      ],
    },
  ];

  getUsers(): User[] {
    return this.usersList;
  }

  getUser(username: string): User | undefined {
    return this.usersList.find((user) => user.username === username);
  }

  getPost(postId: string, user: User): Post | undefined {
    return user.postsList.find((post) => post.id === postId);
  }
}
