import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const midleware = [thunk];
const store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...midleware))
)
export default store;
