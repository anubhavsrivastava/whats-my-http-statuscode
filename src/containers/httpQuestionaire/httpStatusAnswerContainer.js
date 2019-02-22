import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Step, Icon, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../../components/common/pageHeader';
import HttpStatusSeriesAnswerContainer from './httpStatusSeriesAnswerContainer';
import HttpStatusCodeAnswerContainer from './httpStatusCodeAnswerContainer';
const mapStateToProps = (state, ownProps) => ({
	// httpCodeSeries: state.httpInfo.httpCodeSeries,
	// httpCodes: state.httpInfo.httpCodes,
	// httpCodeSeriesQuestions: state.httpInfo.questions.httpCodeSeries,
	// httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusAnswerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabId: +props.match.params.tabid || 0
		};
	}

	switchTab = tabId => {
		this.setState({ tabId });
	};

	render() {
		const { tabId } = this.state;
		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid stackable="tablet">
									<Step active={tabId === 0} onClick={() => this.switchTab(0)} link>
										<Icon name="cubes" />
										<Step.Content>
											<Step.Title>HTTP Class code</Step.Title>
											<Step.Description>Choose HTTP status code series</Step.Description>
										</Step.Content>
									</Step>
									<Step active={tabId === 1} onClick={() => this.switchTab(1)} link>
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
					{tabId === 0 ? <HttpStatusSeriesAnswerContainer /> : null}
					{tabId === 1 ? <HttpStatusCodeAnswerContainer /> : null}
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
