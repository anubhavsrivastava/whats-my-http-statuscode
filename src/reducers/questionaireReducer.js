import * as actionTypes from '../actions/actionTypes';

const initialState = {
	classQuestions: [],
	codeQuestions: []
};

export default function questionaireReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
