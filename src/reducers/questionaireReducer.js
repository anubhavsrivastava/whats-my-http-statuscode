import * as actionTypes from '../actions/actionTypes';

const initialState = {
	classQuestions: [],
	codeQuestions: []
};

export default function questionaireReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_QUESTIONAIRE:
			return Object.assign({}, state, { classQuestions: [...state.classQuestions, action.payload] });
		default:
			return state;
	}
}
