import { LOGIN_SUCCESS, LOGOUT_L } from "./actionTypes";

const isTokenPresent = JSON.parse(localStorage.getItem("token")) || null;
const initialState = {
  token: "",
  auth: isTokenPresent ? true : false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  console.log("payload: ", payload);
  switch (type) {
    case LOGIN_SUCCESS:
      return { token: payload, auth: true };
    case LOGOUT_L:
      return state;
    default:
      return state;
  }
};
