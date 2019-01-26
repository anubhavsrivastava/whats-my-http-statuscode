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
	return dispatch => {
		return httpAPI.fetchRelatedSitesSchemas().then(relatedSites => {
			dispatch(fetchRelatedSitesDataAction(relatedSites));
		});
	};
};

const fetchStabilityData = () => {
	return dispatch => {
		return httpAPI.fetchStabilitySchemas().then(stabilityInfo => {
			dispatch(fetchStabilityDataAction(stabilityInfo));
		});
	};
};

const fetchHttpCodeClassesData = () => {
	return dispatch => {
		return httpAPI.fetchHttpCodeClassesSchemas().then(httpClassInfo => {
			dispatch(fetchHttpCodeClassesDataAction(httpClassInfo));
		});
	};
};

const fetchHttpCodesData = () => {
	return dispatch => {
		return httpAPI.fetchHttpCodeSchemas().then(httpCodesInfo => {
			dispatch(fetchHttpCodesDataAction(httpCodesInfo));
		});
	};
};
export { fetchHttpCodesData, fetchHttpCodeClassesData, fetchStabilityData, fetchRelatedSitesData };
