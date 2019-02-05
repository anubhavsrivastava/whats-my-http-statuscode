import * as actionTypes from './actionTypes';
function actionCreator(action) {
	return (...args) => {
		return dispatch => {
			return dispatch(action.call(this, ...args));
		};
	};
}

const addQuestionaireAction = question => {
	return {
		type: actionTypes.ADD_QUESTIONAIRE,
		payload: question
	};
};

//rework but do it
const addQuestionaire = actionCreator(addQuestionaireAction);

export { addQuestionaire };
