import { SET_AUTH_USER } from "../actions/dispatchTypes";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action) => {
  // console.log('@@@@@@@', action)
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
