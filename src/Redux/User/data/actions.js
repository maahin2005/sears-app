import axios from "axios";
import { USERDATA } from "./actionTypes";

export const getUserData = (email) => async (dispatch) => {
  const API_URL = `https://sears-backend.onrender.com/users`;

  try {
    const data = await axios.get(API_URL, {
      params: {
        email,
      },
    });
    const userData = data.data.users[0];
    dispatch({ type: USERDATA, payload: userData });
  } catch (error) {
    console.log(error.message);
  }
};
