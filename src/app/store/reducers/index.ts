import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import * as fromMessengerView from './messengerView';
import * as fromSelectedUser from './selectedUser';

export interface State {
  messengerViewState: fromMessengerView.State;
  selectedUserId: fromSelectedUser.State;
}
export const reducers: ActionReducerMap<State> = {
  messengerViewState: fromMessengerView.reducer,
  selectedUserId: fromSelectedUser.reducer
};
export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
    return function (state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = [logger];

export const getMessengerView = createFeatureSelector<fromMessengerView.State>('messengerViewState');
export const getSelectedUserIdFeature = createFeatureSelector<fromSelectedUser.State>('selectedUserId');

export const getCurrentView = createSelector(
  getMessengerView,
  fromMessengerView.getCurrentView
);

export const getSelectedUserId = createSelector(
  getSelectedUserIdFeature,
  fromSelectedUser.getSelectedUserId
);
