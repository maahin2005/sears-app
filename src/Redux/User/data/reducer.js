import { USERDATA } from "./actionTypes";

export const dataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USERDATA:
      return payload;
    default:
      return state;
  }
};
