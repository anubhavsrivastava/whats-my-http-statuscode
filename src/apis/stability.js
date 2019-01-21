import { getStabilityCodes } from './data';

function fetchStabilitySchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getStabilityCodes());
	});
}

export { fetchStabilitySchemas };
