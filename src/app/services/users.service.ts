import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersList: User[] = [
    {
      id: '0',
      username: 'gbergessio',
      userFullName: 'Gonzalo Bergessio',
      userPhotoPath: 'https://storage.googleapis.com/tenfield-storage/2021/12/6db43a1e-bergessio-festejo-de-gol.jpg',
    },
    {
      id: '1',
      username: 'frangundez10',
      userFullName: 'Franco Fagundez',
      userPhotoPath: 'https://pbs.twimg.com/media/FtrYIlpWcAAJPo5.jpg',
    },
    {
      id: '2',
      username: 'didiMessi22',
      userFullName: 'Diego Zabala',
      userPhotoPath: '',
    },
    {
      id: '3',
      username: 'luissuarez09',
      userFullName: 'Luis Suarez',
      userPhotoPath: '',
    },
    {
      id: '4',
      username: 'chino20recoba',
      userFullName: 'Alvaro Recoba',
      userPhotoPath: '',
    },
    {
      id: '5',
      username: 'gigliotti09',
      userFullName: 'Emmanuel Gigliotti',
      userPhotoPath: '',
    },
    {
      id: '6',
      username: 'rochet01sergio',
      userFullName: 'Sergio Rochet',
      userPhotoPath: '',
      
    },
    {
      id: '7',
      username: 'polentaforever',
      userFullName: 'Diego Polenta',
      userPhotoPath: '',
      
    },
    {
      id: '8',
      username: 'fabinoguerabolso',
      userFullName: 'Fabian Noguera',
      userPhotoPath: '',
      
    },
    {
      id: '9',
      username: 'brianocampo',
      userFullName: 'Brian Ocampo',
      userPhotoPath: '',
    },
  ];

  getUsers(): User[] {
    return this.usersList;
  }

  getUser(userId: string): User | undefined {
    return this.usersList.find((user) => user.id === userId);
  }
}
