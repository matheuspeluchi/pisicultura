import { LOGIN } from '../actions/actionTypes';

const initialState = {
    newValue: 'Teste Redux'
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