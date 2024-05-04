import { ERROR, IS_LOADING, NO_LOADING } from "../Loading/actionTypes";
import { DATA_FETCHED } from "./actionTypes";
import axios from "axios";

export const getDataFromAPI =
  (category = undefined, limit = 0, page = 0) =>
  async (dispatch) => {
    const API_URL = `https://sears-backend.onrender.com/products`;
    dispatch({ type: IS_LOADING });
    try {
      const params = {};
      if (limit) {
        params.limit = limit;
      }
      if (page) {
        params.page = page;
      }
      if (category) {
        params.category = category;
      }

      const resp = await axios.get(API_URL, {
        params,
      });
      dispatch({ type: DATA_FETCHED, payload: resp.data });
      dispatch({ type: NO_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR });
    }
  };
