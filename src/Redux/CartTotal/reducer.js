import { CART_TOTAL } from "./actionTypes";

export const cartTotalReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case CART_TOTAL:
      return payload;
    default:
      return state;
  }
};
