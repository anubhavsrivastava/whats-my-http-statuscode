import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RoutesMapping from '../constant/routes';
import SampleComponent from '../components/SampleComponent';
import { getApplicationInfo } from '../actions/applicationAction';
import '../static/css/App.css';
import 'semantic-ui-css/semantic.min.css';
import FixedMenuLayout from '../components/layouts/DefaultLayout';
const Routes = RoutesMapping.getRoutes();

const mapStateToProps = (state, ownProps) => ({
	applicationName: state.application.name
});

const mapDispatchToProps = dispatch => ({
	updateApplicationInfo: () => {
		return dispatch(getApplicationInfo());
	}
});

class AppContainer extends Component {
	componentDidMount = () => {
		this.props.updateApplicationInfo();
	};

	render() {
		const { applicationName } = this.props;
		return (
			<React.Fragment>
				<Switch>
					{/* <Route path={RoutesMapping.HOME} component={}/> */}
					<Route exact path={Routes.HTTPSTATUS.path} render={() => <FixedMenuLayout name={applicationName} />} />
					<Redirect to={Routes.HTTPSTATUS.path} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AppContainer)
);
