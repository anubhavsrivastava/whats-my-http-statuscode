import * as actionTypes from './actionTypes';
import * as httpAPI from '../apis/stability';

const fetchStabilityDataAction = stabilityData => {
	return {
		type: actionTypes.FETCH_STABILITY_DATA,
		payload: {
			stability: stabilityData
		}
	};
};

const fetchStabilityData = () => {
	return dispatch => {
		return httpAPI.fetchStabilitySchemas().then(stabilityInfo => {
			dispatch(fetchStabilityDataAction(stabilityInfo));
		});
	};
};

export { fetchStabilityData };
