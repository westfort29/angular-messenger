import { Injectable } from '@angular/core';
import { IUser, IUserInfo } from '../models';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UsersService {
  public users: IUser[] = [
    {
      id: 0,
      firstName: 'Alan',
      lastName: 'Cooper'
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: 2,
      firstName: 'Ken',
      lastName: 'Lore'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Brown'
    },
    {
      id: 4,
      firstName: 'Lee',
      lastName: 'Man'
    },
    {
      id: 5,
      firstName: 'Hue',
      lastName: 'Lame'
    },
    {
      id: 6,
      firstName: 'Pipe',
      lastName: 'Game'
    },
    {
      id: 7,
      firstName: 'First',
      lastName: 'Name'
    },
    {
      id: 8,
      firstName: 'Last',
      lastName: 'Name'
    },
    {
      id: 9,
      firstName: 'Dwayne',
      lastName: 'Jhonson'
    },
    {
      id: 10,
      firstName: 'Ape',
      lastName: 'Simpson'
    },
    {
      id: 11,
      firstName: 'Kenny',
      lastName: 'Smith'
    },
    {
      id: 12,
      firstName: 'War',
      lastName: 'Mane'
    },
    {
      id: 13,
      firstName: 'Lupe',
      lastName: 'Smith'
    },
    {
      id: 14,
      firstName: 'John',
      lastName: 'Brown'
    },
    {
      id: 15,
      firstName: 'Eric',
      lastName: 'Fils'
    },
    {
      id: 16,
      firstName: 'Hill',
      lastName: 'Porsigins'
    },
    {
      id: 17,
      firstName: 'Great',
      lastName: 'Feature'
    },
    {
      id: 18,
      firstName: 'Still',
      lastName: 'Cooper'
    },
    {
      id: 19,
      firstName: 'Man',
      lastName: 'Wopper'
    },
    {
      id: 20,
      firstName: 'Chief',
      lastName: 'Huge'
    }
  ];
  public usersInfo: IUserInfo[] = [
    {
      id: 0,
      firstName: 'Alan',
      lastName: 'Cooper',
      age: 29,
      about: 'some self description',
      city: 'New-York'
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      age: 43,
      about: 'John Smith description',
      city: 'Washington'
    },
    {
      id: 2,
      firstName: 'Ken',
      lastName: 'Lore',
      age: 36,
      about: 'Ken Lore Description',
      city: 'Los-Angeles'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Brown',
      age: 23,
      about: 'Mike Brown Description',
      city: 'Denver'
    },
    {
      id: 4,
      firstName: 'Lee',
      lastName: 'Man',
      age: 42,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 5,
      firstName: 'Hue',
      lastName: 'Lame',
      age: 32,
      about: 'Hue Lame description',
      city: 'San-Antonio'
    },
    {
      id: 6,
      firstName: 'Pipe',
      lastName: 'Game',
      age: 31,
      about: 'Pipe Game description',
      city: 'Seatle'
    },
    {
      id: 7,
      firstName: 'First',
      lastName: 'Name',
      age: 30,
      about: 'First Name description',
      city: 'Moscow'
    },
    {
      id: 8,
      firstName: 'Last',
      lastName: 'Name',
      age: 40,
      about: 'Last Name description',
      city: 'Izhevsk'
    },
    {
      id: 9,
      firstName: 'Dwayne',
      lastName: 'Jhonson',
      age: 47,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 10,
      firstName: 'Ape',
      lastName: 'Simpson',
      age: 22,
      about: 'Ape Simpson description',
      city: 'Atlanta'
    },
    {
      id: 11,
      firstName: 'Kenny',
      lastName: 'Smith',
      age: 43,
      about: 'Kenny Smith description',
      city: 'Miami'
    },
    {
      id: 12,
      firstName: 'War',
      lastName: 'Mane',
      age: 43,
      about: 'War Mane description',
      city: 'Houston'
    },
    {
      id: 13,
      firstName: 'Lupe',
      lastName: 'Smith',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 14,
      firstName: 'John',
      lastName: 'Brown',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 15,
      firstName: 'Eric',
      lastName: 'Fils',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 16,
      firstName: 'Hill',
      lastName: 'Porsigins',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 17,
      firstName: 'Great',
      lastName: 'Feature',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 18,
      firstName: 'Still',
      lastName: 'Cooper',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 19,
      firstName: 'Man',
      lastName: 'Wopper',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    },
    {
      id: 20,
      firstName: 'Chief',
      lastName: 'Huge',
      age: 43,
      about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
      officia deserunt mollit anim id est laborum.',
      city: 'Houston'
    }
  ];
  constructor() {}

  public getUserInfoById(userId: number): Observable<IUserInfo> {
    const userInfo = this.usersInfo.filter(userInfo => userInfo.id === userId)[0];
    return of(userInfo).pipe(delay(0));
  }

  public getUsers(): Observable<IUser[]> {
    return of(this.users).pipe(delay(0));
  }
}
