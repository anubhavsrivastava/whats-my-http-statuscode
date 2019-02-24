import { combineReducers } from 'redux';
import httpInfoReducer from './httpInfoReducer';

const rootReducer = combineReducers({
	httpInfo: httpInfoReducer
});

export default rootReducer;
