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

const fetchRelatedSitesData = () => {
	return dispatch => {
		return httpAPI.fetchRelatedSitesSchemas().then(stabilityInfo => {
			dispatch(fetchRelatedSitesDataAction(stabilityInfo));
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

export { fetchStabilityData, fetchRelatedSitesData };
