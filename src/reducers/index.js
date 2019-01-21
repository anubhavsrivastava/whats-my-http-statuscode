import { combineReducers } from 'redux';
import applicationReducer from './applicationReducer';
import httpInfoReducer from './httpInfomationReducer';

const rootReducer = combineReducers({
	application: applicationReducer,
	httpInfo: httpInfoReducer
});

export default rootReducer;
