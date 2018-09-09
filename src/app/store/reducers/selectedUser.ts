import * as selectedUserActions from '../actions/selectedUserActions';
export interface State {
  selectedUserId: number;
}
export const initialState: State = {
  selectedUserId: 0
};

export function reducer(state = initialState, action: selectedUserActions.Action) {
    switch (action.type) {
      case selectedUserActions.SET_USER_ID: {
        return {
          ...state,
          selectedUserId: action.payload
        };
      }
      default:
        return state;
    }
}

export const getSelectedUserId = (state: State) => state.selectedUserId;
