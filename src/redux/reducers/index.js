import { combineReducers } from "redux";
import system from "./systemReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({
  system,
  profile,
});

export default rootReducer;
