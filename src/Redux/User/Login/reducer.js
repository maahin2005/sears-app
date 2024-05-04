import { LOGIN_SUCCESS, LOGOUT_L } from "./actionTypes";

const isTokenPresent = !!localStorage.getItem("token");
const initialState = {
  token: "",
  auth: isTokenPresent,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { token: payload, auth: true };
    case LOGOUT_L:
      return { token: "", auth: false };
    default:
      return state;
  }
};
