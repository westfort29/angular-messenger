import { IUser } from './user';

export interface IChatMessage {
  body: string;
  date: number;
  author: IUser;
}
