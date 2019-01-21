import * as actionTypes from '../actions/actionTypes';

const initialState = {
	stability: []
};

export default function httpInfoReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_STABILITY_DATA:
			return Object.assign({}, state, { stability: action.payload.stability });
		default:
			return state;
	}
}
