import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public readonly viewSates = {
    USERS_LIST: 'userslist',
    USER_INFO: 'userInfo',
    CHAT: 'chat'
  };
  constructor() {}
}
