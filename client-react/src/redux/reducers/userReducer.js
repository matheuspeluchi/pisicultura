const initialState = {
    newValue: ''
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };