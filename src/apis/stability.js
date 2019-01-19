import { getStabilityCodes } from '../../api/index';

function fetchStabilitySchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getStabilityCodes);
	});
}

export { fetchStabilitySchemas };
