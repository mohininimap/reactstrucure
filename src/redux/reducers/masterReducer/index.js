import { combineReducers } from "redux";
import { reasonMasterReducer } from "./reasonMasterReducer";
export const masterReducer = combineReducers({
  reasonMaster: reasonMasterReducer,
});
