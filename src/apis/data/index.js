import stabilityJSON from './stability.json';
import sitesJSON from './sites.json';

function getStabilityCodes() {
	return stabilityJSON;
}

function getRelatedSites() {
	return sitesJSON;
}

export { getStabilityCodes, getRelatedSites };
