import stabilityJSON from './stability.json';
import sitesJSON from './sites.json';
import httpSeriesJSON from './series.json';
import httpCodesJSON from './codes';
import httpSeriesQuestionJSON from './questions/httpSeriesCodeQuestions.json';
import httpCodesQuestionJSON from './questions/codes';
function getStabilityCodes() {
	return stabilityJSON;
}

function getRelatedSites() {
	return sitesJSON;
}

function gethttpCodeSeries() {
	return httpSeriesJSON;
}

function getHttpCodes() {
	return httpCodesJSON;
}

function gethttpCodeSeriesQuestions() {
	return httpSeriesQuestionJSON;
}

function getHttpCodeQuestions() {
	return httpCodesQuestionJSON;
}

export { getHttpCodes, getStabilityCodes, getRelatedSites, gethttpCodeSeries, gethttpCodeSeriesQuestions, getHttpCodeQuestions };
