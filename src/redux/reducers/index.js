import { combineReducers } from "redux";

// all reducers

import { masterReducer } from "./masterReducer/index";

// import { processReducer } from "./processReducer/index";

export const rootReducer = combineReducers({
  
    master: masterReducer,
   
})
