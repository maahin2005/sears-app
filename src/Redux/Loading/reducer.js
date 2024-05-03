import { IS_LOADING, NO_LOADING } from "./actionTypes";

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case IS_LOADING:
      return true;
    case NO_LOADING:
      return false;
    default:
      return state;
  }
};
