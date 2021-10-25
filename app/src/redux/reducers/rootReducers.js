import { combineReducers } from "redux";
import { covid19Reducers } from "./covid19Reducers";

export const rootReducers = combineReducers({
    covid19Reducers:covid19Reducers
})