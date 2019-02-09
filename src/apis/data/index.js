import stabilityJSON from './stability.json';
import sitesJSON from './sites.json';
import httpClassesJSON from './class.json';
import httpCodesJSON from './codes';
import httpClassQuestionJSON from './questions/httpClassCodeQuestions.json';
import httpCodesQuestionJSON from './questions/codes';
function getStabilityCodes() {
	return stabilityJSON;
}

function getRelatedSites() {
	return sitesJSON;
}

function gethttpCodeSeries() {
	return httpClassesJSON;
}

function getHttpCodes() {
	return httpCodesJSON;
}

function gethttpCodeSeriesQuestions() {
	return httpClassQuestionJSON;
}

function getHttpCodeQuestions() {
	return httpCodesQuestionJSON;
}

export { getHttpCodes, getStabilityCodes, getRelatedSites, gethttpCodeSeries, gethttpCodeSeriesQuestions, getHttpCodeQuestions };
