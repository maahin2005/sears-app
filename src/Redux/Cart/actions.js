import axios from "axios";
import { CARTITEMS } from "./actionTypes";
import { IS_LOADING, NO_LOADING } from "../Loading/actionTypes";
import { CART_TOTAL } from "../CartTotal/actionTypes";

export const getCartItems = async (dispatch) => {
  const API_URL = "https://sears-backend.onrender.com/cart";
  dispatch({ type: IS_LOADING });

  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      console.error("Token not found");
      return;
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: CART_TOTAL, payload: response.data.total });
    dispatch({ type: CARTITEMS, payload: response.data.items });
    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: NO_LOADING });
  }
};
