import * as actionTypes from '../actions/actionTypes';

const initialState = {
	stability: [],
	sites: [],
	httpCodeClasses: [],
	httpCodes: {}
};

export default function httpInfoReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_STABILITY_DATA:
			return Object.assign({}, state, { stability: action.payload.stability });
		case actionTypes.FETCH_RELATED_SITES:
			return Object.assign({}, state, { sites: action.payload.sites });
		case actionTypes.FETCH_HTTPCODES_CLASS:
			return Object.assign({}, state, { httpCodeClasses: action.payload.httpCodeClasses });
		case actionTypes.FETCH_HTTPCODES:
			return Object.assign({}, state, { httpCodes: action.payload.httpCodes });
		default:
			return state;
	}
}
