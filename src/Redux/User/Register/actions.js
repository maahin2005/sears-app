import axios from "axios";
import { REGISTERUSER } from "./actionTypes";
import { getUserData } from "../data/actions";
import { ERROR, IS_LOADING, NO_LOADING } from "../../Loading/actionTypes";

const API_URL = "https://sears-backend.onrender.com";
export const userRegistration = (obj) => async (dispatch) => {
  const REGISTER_URL = `${API_URL}/users/register`;
  dispatch({ type: IS_LOADING });

  try {
    const resp = await axios.post(REGISTER_URL, obj);
    const email = resp.data.newUser.email;

    dispatch({ type: REGISTERUSER });
    localStorage.setItem("auth", JSON.stringify(true));
    localStorage.setItem("email", JSON.stringify(email));

    dispatch(getUserData(email));
    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR });
  }
};
