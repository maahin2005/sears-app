import axios from "axios";
import { LOGIN_SUCCESS } from "./actionTypes";
import { getUserData } from "../data/actions";
import { ERROR, IS_LOADING, NO_LOADING } from "../../Loading/actionTypes";

export const loginUser = (obj) => async (dispatch) => {
  const LOGIN_URL = `https://sears-backend.onrender.com/users/login`;
  dispatch({ type: IS_LOADING });

  try {
    const resp = await axios.post(LOGIN_URL, obj);

    const token = resp.data.token;
    const email = resp.data.user.email;

    dispatch(getUserData(email));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("email", JSON.stringify(email));

    if (token) {
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } else {
      dispatch({ type: ERROR });
    }

    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: ERROR });
  }
};
