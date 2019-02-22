import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RoutesMapping from '../constant/routes';
import { getApplicationInfo } from '../actions/applicationAction';
import '../static/css/App.css';
import 'semantic-ui-css/semantic.min.css';
import FixedMenuLayout from '../components/layouts/defaultLayout';
import ResourceContainer from './resourceContainer';
import HTTPCodesListContainer from './httpcodesListContainer';
import FAQContainer from './FAQContainer';
import HTTPStatusAnswerContainer from './httpQuestionaire/httpStatusAnswerContainer';
const Routes = RoutesMapping.getRoutes();

const mapStateToProps = (state, ownProps) => ({});

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
		return (
			<React.Fragment>
				<FixedMenuLayout>
					<Switch>
						{/* <Route path={RoutesMapping.HOME} component={}/> */}
						<Route exact path={Routes.HTTPSTATUS.path} render={() => <ResourceContainer />} />
						<Route exact path={Routes.RESOURCE.path} render={() => <ResourceContainer />} />
						<Route exact path={Routes.HTTPCODEDETAILS.path} render={() => <HTTPCodesListContainer />} />
						<Route exact path={Routes.FAQ.path} render={() => <FAQContainer />} />
						<Route path={`${Routes.HTTPSTATUSANSWER.path}/:tabid?`} render={() => <HTTPStatusAnswerContainer />} />
						<Redirect to={Routes.HTTPSTATUSANSWER.path} />
					</Switch>
				</FixedMenuLayout>
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
