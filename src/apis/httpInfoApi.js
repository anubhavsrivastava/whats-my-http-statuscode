import { getHttpCodes, getStabilityCodes, getRelatedSites, gethttpCodeSeries, gethttpCodeSeriesQuestions, getHttpCodeQuestions } from './data';

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

function fetchhttpCodeSeriesSchemas() {
	return new Promise(function(resolve, reject) {
		resolve(gethttpCodeSeries());
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

function fetchhttpCodeSeriesQuestions() {
	return new Promise(function(resolve, reject) {
		resolve(gethttpCodeSeriesQuestions());
	});
}

export { fetchHttpCodeQuestions, fetchhttpCodeSeriesQuestions, fetchHttpCodeSchemas, fetchhttpCodeSeriesSchemas, fetchStabilitySchemas, fetchRelatedSitesSchemas };
