import { getStabilityCodes, getRelatedSites, getHttpCodeClasses } from './data';

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

function fetchHttpCodeClassesSchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getHttpCodeClasses());
	});
}

export { fetchHttpCodeClassesSchemas, fetchStabilitySchemas, fetchRelatedSitesSchemas };
