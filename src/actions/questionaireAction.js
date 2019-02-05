import * as actionTypes from './actionTypes';
function actionCreator(action) {
	return (...args) => {
		return dispatch => {
			return dispatch(action.call(this, ...args));
		};
	};
}

const addQuestionaireAction = (question, opt) => {
	return {
		type: actionTypes.ADD_QUESTIONAIRE,
		payload: { id: question.id, opt: opt }
	};
};

//rework but do it
const addQuestionaire = actionCreator(addQuestionaireAction);

export { addQuestionaire };
