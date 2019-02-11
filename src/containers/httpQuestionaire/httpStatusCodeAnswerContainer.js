import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dropdown, Divider, Button, Header, Icon, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../../components/flow/questionComponent';
import HttpClassCardList from '../../components/flow/httpClassCardList';
const mapStateToProps = (state, ownProps) => ({
	httpCodes: state.httpInfo.httpCodes,
	httpCodeSeries: state.httpInfo.httpCodeSeries,
	httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusCodeAnswerContainer extends Component {
	initialState = { currentSeries: '', currentAnswer: [], answered: false, currentIndex: 0 };
	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	getHttpSeriesDropDown = () => {
		const { httpCodeSeries = [] } = this.props;

		return httpCodeSeries.map(t => {
			return {
				text: `${t.name} - ${t.type}`,
				value: t.name
			};
		});
	};

	clearState = () => {
		this.setState(this.initialState);
	};

	onOptionChoose = (question, option) => {
		if (option.action.type === 'node') {
			this.setState({ answered: true, currentAnswer: option.action.value });
		}
		if (option.action.type === 'link') {
			this.setState({ currentIndex: option.action.value });
		}
	};

	render() {
		const { httpCodesQuestions = {}, httpCodes = {}, currentSeries } = this.props;
		const { currentIndex, answered, currentAnswer } = this.state;
		const currentQuestion = {};
		this.getHttpSeriesDropDown();
		// const currentQuestion = httpCodesQuestions.find(t => t.id === currentIndex);
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								{currentSeries ? (
									answered ? (
										<Segment placeholder>
											<Grid.Row>
												<Header as="h2">
													<Icon name="flag checkered" />
													<Header.Content>HTTP Status Code Series </Header.Content>
												</Header>
												<HttpClassCardList httpClassList={httpCodes['2xx'].filter(t => currentAnswer.includes(t.name))} />
											</Grid.Row>
											<Divider />
											<Grid.Row>
												<Button floated="right" icon="redo" color="black" content="Try Again" onClick={this.clearState} />
											</Grid.Row>
										</Segment>
									) : (
										<Segment placeholder>
											<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
										</Segment>
									)
								) : (
									<Dropdown placeholder="Select Series" fluid selection options={this.getHttpSeriesDropDown()} />
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</React.Fragment>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HTTPStatusCodeAnswerContainer)
);
