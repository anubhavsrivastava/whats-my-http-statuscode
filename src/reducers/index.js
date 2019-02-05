import { combineReducers } from 'redux';
import applicationReducer from './applicationReducer';
import httpInfoReducer from './httpInfoReducer';
import questionaireReducer from './questionaireReducer';

const rootReducer = combineReducers({
	application: applicationReducer,
	httpInfo: httpInfoReducer,
	questionaire: questionaireReducer
});

export default rootReducer;
