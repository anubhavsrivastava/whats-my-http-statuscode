import * as actionTypes from './actionTypes';
import packageJson from '../../package.json';
import { fetchStabilityData } from './httpStatusInformationAction';

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
			resolve(packageJson.name);
		});
	};
};

export { getApplicationInfo };
