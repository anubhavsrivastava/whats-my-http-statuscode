import { Component } from 'react';
import { withRouter } from 'react-router';

class GATrackingContainer extends Component {
	sendPageView = page => {
		// Do nothing if GA was not initialized due to a missing tracking ID.
		if (!window.ga) {
			return;
		}

		window.ga('set', 'page', page);
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
