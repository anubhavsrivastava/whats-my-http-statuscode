import { Component } from 'react';
import { withRouter } from 'react-router';

class GATrackingContainer extends Component {
	sendPageView = page => {
		// Do nothing if GA was not initialized due to a missing tracking ID.
		if (!window.ga) {
			return;
		}

		// Sets the page value on the tracker.
		window.ga('set', 'page', page);

		// Sending the pageview no longer requires passing the page
		// value since it's now stored on the tracker object.
		window.ga('send', 'pageview');
	};

	componentDidUpdate = prevProps => {
		const currentPage = prevProps.location.pathname + prevProps.location.search;
		const nextPage = this.props.location.pathname + this.props.location.search;

		if (currentPage !== nextPage) {
			this.sendPageView(nextPage);
		}
	};

	render() {
		return null;
	}
}

export default withRouter(GATrackingContainer);
