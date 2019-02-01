import * as actionTypes from './actionTypes';
import packageJson from '../../package.json';
import { fetchHttpCodeClassesQuestions, fetchHttpCodesQuestions, fetchHttpCodesData, fetchStabilityData, fetchRelatedSitesData, fetchHttpCodeClassesData } from './httpInfoAction';

const updateApplicationInfo = appInfo => {
	return {
		type: actionTypes.UPDATE_APPLICATION,
		payload: {
			version: appInfo.version,
			name: appInfo.name
		}
	};
};

const getApplicationInfo = () => {
	return dispatch => {
		return new Promise(resolve => {
			dispatch(updateApplicationInfo(packageJson));
			dispatch(fetchStabilityData());
			dispatch(fetchRelatedSitesData());
			dispatch(fetchHttpCodeClassesData());
			dispatch(fetchHttpCodesData());
			dispatch(fetchHttpCodeClassesQuestions());
			dispatch(fetchHttpCodesQuestions());
			resolve(packageJson.name);
		});
	};
};

export { getApplicationInfo };
