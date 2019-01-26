import stabilityJSON from './stability.json';
import sitesJSON from './sites.json';
import httpClassesJSON from './class.json';

function getStabilityCodes() {
	return stabilityJSON;
}

function getRelatedSites() {
	return sitesJSON;
}

function getHttpCodeClasses() {
	return httpClassesJSON;
}

export { getStabilityCodes, getRelatedSites, getHttpCodeClasses };
