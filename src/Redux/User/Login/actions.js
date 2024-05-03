import axios from "axios";
import { LOGIN_SUCCESS } from "./actionTypes";
import { getUserData } from "../data/actions";
import { IS_LOADING, NO_LOADING } from "../../Loading/actionTypes";

export const loginUser = (obj) => async (dispatch) => {
  const LOGIN_URL = `https://sears-backend.onrender.com/users/login`;

  dispatch({ type: IS_LOADING });

  try {
    const resp = await axios.post(LOGIN_URL, obj);

    const token = resp.data.token;
    const email = resp.data.user.email;
    console.log("token:", token, "Email: ", email);
    dispatch(getUserData(email));

    dispatch({ type: LOGIN_SUCCESS, payload: token });
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error.data);
  }
};
