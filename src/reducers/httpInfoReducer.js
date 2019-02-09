import * as actionTypes from '../actions/actionTypes';

const initialState = {
	stability: [],
	sites: [],
	httpCodeSeries: [],
	httpCodes: {},
	questions: {
		httpCodeSeries: [],
		httpCodes: {}
	}
};

export default function httpInfoReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_STABILITY_DATA:
			return Object.assign({}, state, { stability: action.payload.stability });
		case actionTypes.FETCH_RELATED_SITES:
			return Object.assign({}, state, { sites: action.payload.sites });
		case actionTypes.FETCH_HTTPCODES_CLASS:
			return Object.assign({}, state, { httpCodeSeries: action.payload.httpCodeSeries });
		case actionTypes.FETCH_HTTPCODES:
			return Object.assign({}, state, { httpCodes: action.payload.httpCodes });
		case actionTypes.FETCH_HTTPCODES_CLASS_QUESTIONS:
			//TODO: this has to be new reducers
			return Object.assign({}, state, { questions: Object.assign({}, state.questions, { httpCodeSeries: action.payload.httpCodeSeries }) });
		case actionTypes.FETCH_HTTPCODES_QUESTIONS:
			//TODO: this has to be new reducers
			return Object.assign({}, state, { questions: Object.assign({}, state.questions, { httpCodes: action.payload.httpCodes }) });
		default:
			return state;
	}
}
