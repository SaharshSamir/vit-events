import { combineReducers } from 'redux';
import { Auth } from './Auth';
import { EventReducer } from './Event';
const RootReducer = combineReducers({
	Auth,
	EventReducer
});
export default RootReducer;
