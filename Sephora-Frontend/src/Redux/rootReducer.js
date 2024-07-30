import { combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
});

export default rootReducer;
