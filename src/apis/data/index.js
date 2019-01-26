import stabilityJSON from './stability.json';
import sitesJSON from './sites.json';
import httpClassesJSON from './class.json';
import httpCodesJSON from './codes';
function getStabilityCodes() {
	return stabilityJSON;
}

function getRelatedSites() {
	return sitesJSON;
}

function getHttpCodeClasses() {
	return httpClassesJSON;
}

function getHttpCodes() {
	return httpCodesJSON;
}

export { getStabilityCodes, getRelatedSites, getHttpCodeClasses };
