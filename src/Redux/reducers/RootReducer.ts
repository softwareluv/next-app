import { combineReducers } from "redux";
import searchReducer from "./SearchReducer";

const RootReducer = combineReducers({
    search: searchReducer
});

export default RootReducer;
