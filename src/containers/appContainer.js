import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RoutesMapping from '../constant/routes';
import '../static/css/App.css';
import 'semantic-ui-css/semantic.min.css';
import FixedMenuLayout from '../components/layouts/defaultLayout';
import ResourceContainer from './resourceContainer';
import HTTPCodesListContainer from './httpcodesListContainer';
import FAQContainer from './FAQContainer';
import { fetchAllHTTPInfo } from '../actions/httpInfoAction';
import HTTPStatusAnswerContainer from './httpQuestionaire/httpStatusAnswerContainer';
import CreditsContainer from './creditsContainer';
const Routes = RoutesMapping.getRoutes();

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
	fetchAllHTTPInfo: () => {
		return dispatch(fetchAllHTTPInfo());
	}
});

class AppContainer extends Component {
	componentDidMount = () => {
		this.props.fetchAllHTTPInfo();
	};

	render() {
		return (
			<FixedMenuLayout>
				<Switch>
					{/* <Route path={RoutesMapping.HOME} component={}/> */}
					<Route exact path={Routes.HTTPSTATUS.path} render={() => <ResourceContainer />} />
					<Route exact path={Routes.RESOURCE.path} render={() => <ResourceContainer />} />
					<Route exact path={Routes.HTTPCODEDETAILS.path} render={() => <HTTPCodesListContainer />} />
					<Route exact path={Routes.FAQ.path} render={() => <FAQContainer />} />
					<Route exact path={Routes.CREDITS.path} render={() => <CreditsContainer />} />
					<Route path={`${Routes.HTTPSTATUSANSWER.path}/:tabid?/:option?`} render={() => <HTTPStatusAnswerContainer />} />
					<Redirect to={Routes.HTTPSTATUSANSWER.path} />
				</Switch>
			</FixedMenuLayout>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AppContainer)
);
