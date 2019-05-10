import { combineReducers } from "redux";
import { isLoginReducer } from "./isLoginReducer";
import {origamiListReducer} from "./origamiListReducer";

export const reducers = combineReducers({
    isLogin: isLoginReducer,
    origamiList: origamiListReducer
});