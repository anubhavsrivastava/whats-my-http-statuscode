import { getHttpCodes, getStabilityCodes, getRelatedSites, getHttpCodeClasses, getHttpCodeClassesQuestions, getHttpCodeQuestions } from './data';

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

function fetchHttpCodeSchemas() {
	return new Promise(function(resolve, reject) {
		resolve(getHttpCodes());
	});
}

function fetchHttpCodeQuestions() {
	return new Promise(function(resolve, reject) {
		resolve(getHttpCodeQuestions());
	});
}

function fetchHttpCodeClassesQuestions() {
	return new Promise(function(resolve, reject) {
		resolve(getHttpCodeClassesQuestions());
	});
}

export { fetchHttpCodeQuestions, fetchHttpCodeClassesQuestions, fetchHttpCodeSchemas, fetchHttpCodeClassesSchemas, fetchStabilitySchemas, fetchRelatedSitesSchemas };
