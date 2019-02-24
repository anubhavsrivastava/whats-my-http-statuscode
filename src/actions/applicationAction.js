import { fetchhttpCodeSeriesQuestions, fetchHttpCodesQuestions, fetchHttpCodesData, fetchStabilityData, fetchRelatedSitesData, fetchhttpCodeSeriesData } from './httpInfoAction';

const getApplicationInfo = () => {
	return dispatch => {
		return new Promise(resolve => {
			dispatch(fetchStabilityData());
			dispatch(fetchRelatedSitesData());
			dispatch(fetchhttpCodeSeriesData());
			dispatch(fetchHttpCodesData());
			dispatch(fetchhttpCodeSeriesQuestions());
			dispatch(fetchHttpCodesQuestions());
		});
	};
};

export { getApplicationInfo };
