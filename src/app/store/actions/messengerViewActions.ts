import { Action } from '@ngrx/store';
export const SET_MESSENGER_VIEW = 'SET_MESSENGER_VIEW';
export class SetMessengerView implements Action {
    readonly type = SET_MESSENGER_VIEW;
    constructor(public payload: string) { }
}
export type Action = SetMessengerView;
