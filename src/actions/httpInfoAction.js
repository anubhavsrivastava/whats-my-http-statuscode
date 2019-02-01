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

const fetchHttpCodeClassesDataAction = classesData => {
	return {
		type: actionTypes.FETCH_HTTPCODES_CLASS,
		payload: {
			httpCodeClasses: classesData
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

const fetchHttpCodeClassesData = () => {
	return async dispatch => {
		const httpClassInfo = await httpAPI.fetchHttpCodeClassesSchemas();
		dispatch(fetchHttpCodeClassesDataAction(httpClassInfo));
	};
};

const fetchHttpCodesData = () => {
	return async dispatch => {
		const httpCodesInfo = await httpAPI.fetchHttpCodeSchemas();
		dispatch(fetchHttpCodesDataAction(httpCodesInfo));
	};
};
export { fetchHttpCodesData, fetchHttpCodeClassesData, fetchStabilityData, fetchRelatedSitesData };
