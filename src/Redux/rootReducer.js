import { combineReducers } from "redux";
import { loginReducer } from "./User/Login/reducer";
import { registerUser } from "./User/Register/reducer";
import { dataReducer } from "./User/data/reducer";
import { loadingReducer } from "./Loading/reducer";
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerUser,
  userData: dataReducer,
  loading: loadingReducer,
  products: productReducer,
  cartData: cartReducer,
});
