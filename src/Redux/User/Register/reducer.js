import { LOGOUT_R, REGISTERUSER } from "./actionTypes";

const LocalAuth = JSON.parse(localStorage.getItem("auth")) || false;

const initialState = {
  auth: LocalAuth,
};

export const registerUser = (state = initialState, { type }) => {
  switch (type) {
    case REGISTERUSER:
      return { auth: true };
    case LOGOUT_R:
      return { auth: false };
    default:
      return state;
  }
};
