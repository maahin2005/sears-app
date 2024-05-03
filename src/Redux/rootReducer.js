import { combineReducers } from "redux";
import { loginReducer } from "./User/Login/reducer";
import { registerUser } from "./User/Register/reducer";
import { dataReducer } from "./User/data/reducer";
import { loadingReducer } from "./Loading/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerUser,
  userData: dataReducer,
  loading: loadingReducer,
});
