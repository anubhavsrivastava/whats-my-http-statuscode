import * as actionTypes from './actionTypes';
import * as httpAPI from '../apis/httpInfoApi';

const fetchStabilityDataAction = stabilityData => {
	return {
		type: actionTypes.FETCH_STABILITY_DATA,
		payload: {
			stability: stabilityData
		}
	};
};

const fetchRelatedSitesDataAction = sitesData => {
	return {
		type: actionTypes.FETCH_RELATED_SITES,
		payload: {
			sites: sitesData
		}
	};
};

const fetchhttpCodeSeriesDataAction = classesData => {
	return {
		type: actionTypes.FETCH_HTTPCODES_SERIES,
		payload: {
			httpCodeSeries: classesData
		}
	};
};

const fetchhttpCodeSeriesQuestionAction = questions => {
	return {
		type: actionTypes.FETCH_HTTPCODES_SERIES_QUESTIONS,
		payload: {
			httpCodeSeries: questions
		}
	};
};

const fetchHttpCodesDataAction = httpCodes => {
	return {
		type: actionTypes.FETCH_HTTPCODES,
		payload: {
			httpCodes: httpCodes
		}
	};
};

const fetchHttpCodesQuestionAction = questions => {
	return {
		type: actionTypes.FETCH_HTTPCODES_QUESTIONS,
		payload: {
			httpCodes: questions
		}
	};
};

const fetchRelatedSitesData = () => {
	return async dispatch => {
		const relatedSites = await httpAPI.fetchRelatedSitesSchemas();
		dispatch(fetchRelatedSitesDataAction(relatedSites));
	};
};

const fetchStabilityData = () => {
	return async dispatch => {
		const stabilityInfo = await httpAPI.fetchStabilitySchemas();
		dispatch(fetchStabilityDataAction(stabilityInfo));
	};
};

const fetchhttpCodeSeriesData = () => {
	return async dispatch => {
		const httpClassInfo = await httpAPI.fetchhttpCodeSeriesSchemas();
		dispatch(fetchhttpCodeSeriesDataAction(httpClassInfo));
	};
};

const fetchhttpCodeSeriesQuestions = () => {
	return async dispatch => {
		const codeClassQuestions = await httpAPI.fetchhttpCodeSeriesQuestions();
		dispatch(fetchhttpCodeSeriesQuestionAction(codeClassQuestions));
	};
};

const fetchHttpCodesData = () => {
	return async dispatch => {
		const httpCodesInfo = await httpAPI.fetchHttpCodeSchemas();
		dispatch(fetchHttpCodesDataAction(httpCodesInfo));
	};
};

const fetchHttpCodesQuestions = () => {
	return async dispatch => {
		const httpCodeQuestions = await httpAPI.fetchHttpCodeQuestions();
		dispatch(fetchHttpCodesQuestionAction(httpCodeQuestions));
	};
};

const fetchAllHTTPInfo = () => {
	return async dispatch => {
		const httpCodeQuestions = await httpAPI.fetchHttpCodeQuestions();
		dispatch(fetchHttpCodesQuestionAction(httpCodeQuestions));
	};
};

export { fetchHttpCodesQuestions, fetchhttpCodeSeriesQuestions, fetchHttpCodesData, fetchhttpCodeSeriesData, fetchStabilityData, fetchRelatedSitesData };
