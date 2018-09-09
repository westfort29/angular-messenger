import * as messengerViewAction from '../actions/messengerViewActions';
export interface State {
  currentView: string;
}
export const initialState: State = {
  currentView: 'list'
};

export function reducer(state = initialState, action: messengerViewAction.Action) {
    switch (action.type) {
      case messengerViewAction.SET_MESSENGER_VIEW: {
        return {
          ...state,
          currentView: action.payload
        };
      }
      default:
        return state;
    }
}

export const getCurrentView = (state: State) => state.currentView;
