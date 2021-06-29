import { combineReducers } from 'redux';
import systemMessageReducer from './systemMessageReducer.js';

export default combineReducers({
	
	systemMessageArray: systemMessageReducer


});