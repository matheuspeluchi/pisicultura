import { LOGIN } from '../actions/actionTypes';

const initialState = {
    newValue: ''
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };