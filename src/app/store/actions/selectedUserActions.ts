import { Action } from '@ngrx/store';
export const SET_USER_ID = 'SET_USER_ID';
export class SetUserId implements Action {
    readonly type = SET_USER_ID;
    constructor(public payload: number) { }
}
export type Action = SetUserId;
