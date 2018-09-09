import { Routes } from '@angular/router';

import {
  NotFoundComponent,
  UserListComponent,
  UserInfoComponent,
  ChatComponent
} from '../components';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent,
    children: [
      {
        path: 'user/:id',
        component: UserInfoComponent,
        data : { isUserInfo: true },
        children: [
          {
            path: 'chat',
            data : { isChat: true },
            component: ChatComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
