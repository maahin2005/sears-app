import { LOGOUT_R, REGISTERUSER } from "./actionTypes";

const Local_auth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  auth: Local_auth ? true : false,
};

export const registerUser = (state = initialState, { type }) => {
  switch (type) {
    case REGISTERUSER:
      return { auth: true };
    case LOGOUT_R:
      return state;
    default:
      return state;
  }
};
