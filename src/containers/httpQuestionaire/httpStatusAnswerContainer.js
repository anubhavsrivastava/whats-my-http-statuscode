import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Step, Icon, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../../components/common/pageHeader';
import HttpStatusSeriesAnswerContainer from './httpStatusSeriesAnswerContainer';
import HttpStatusCodeAnswerContainer from './httpStatusCodeAnswerContainer';
import RoutesMapping from '../../constant/routes';
const Routes = RoutesMapping.getRoutes();

const mapStateToProps = (state, ownProps) => ({
	// httpCodeSeries: state.httpInfo.httpCodeSeries,
	// httpCodes: state.httpInfo.httpCodes,
	// httpCodeSeriesQuestions: state.httpInfo.questions.httpCodeSeries,
	// httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusAnswerContainer extends Component {
	switchTab = tabid => {
		if (this.props.match.params.tabid !== tabid) {
			this.props.history.push(`${Routes.HTTPSTATUSANSWER.path}/${tabid}`);
		}
	};

	render() {
		const { tabid = '0' } = this.props.match.params;

		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid stackable="tablet">
									<Step active={tabid === '0'} onClick={() => this.switchTab('0')} link>
										<Icon name="cubes" />
										<Step.Content>
											<Step.Title>HTTP Class code</Step.Title>
											<Step.Description>Choose HTTP status code series</Step.Description>
										</Step.Content>
									</Step>
									<Step active={tabid === '1'} onClick={() => this.switchTab('1')} link>
										<Icon name="code" />
										<Step.Content>
											<Step.Title>HTTP Status Code</Step.Title>
											<Step.Description>Choose exact HTTP status code </Step.Description>
										</Step.Content>
									</Step>
								</Step.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					{tabid === '0' ? <HttpStatusSeriesAnswerContainer /> : null}
					{tabid === '1' ? <HttpStatusCodeAnswerContainer /> : null}
				</Segment>
			</React.Fragment>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HTTPStatusAnswerContainer)
);
