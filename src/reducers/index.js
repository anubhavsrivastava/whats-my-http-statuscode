import { combineReducers } from 'redux';
import applicationReducer from './applicationReducer';
import httpInfoReducer from './httpInfoReducer';

const rootReducer = combineReducers({
	application: applicationReducer,
	httpInfo: httpInfoReducer
});

export default rootReducer;
