import { combineReducers } from "redux";
import authentReducer from "./authentification/reducer/authentifierSlice";

const rootReducer = combineReducers({
    auth: authentReducer,
});

export default rootReducer;
