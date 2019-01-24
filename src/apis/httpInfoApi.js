import { getStabilityCodes, getRelatedSites } from './data';

function fetchStabilitySchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getStabilityCodes());
	});
}

function fetchRelatedSitesSchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getRelatedSites());
	});
}

export { fetchStabilitySchemas, fetchRelatedSitesSchemas };
