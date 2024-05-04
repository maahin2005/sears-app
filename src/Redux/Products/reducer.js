import { DATA_FETCHED, DATA_REMOVING } from "./actionTypes";

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case DATA_FETCHED:
      return payload;
    case DATA_REMOVING:
      return state;
    default:
      return state;
  }
};
