import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Divider, Button, Header, Step, Icon, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../components/flow/questionComponent';
import PageHeader from '../components/common/pageHeader';
import { addQuestionaire } from '../actions/questionaireAction';
import HttpClassCardList from '../components/flow/httpClassCardList';
const mapStateToProps = (state, ownProps) => ({
	relatedSites: state.httpInfo.sites,
	httpCodeSeries: state.httpInfo.httpCodeSeries,
	httpCodes: state.httpInfo.httpCodes,
	httpCodeSeriesQuestions: state.httpInfo.questions.httpCodeSeries,
	httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({
	addQuestion: (question, option) => {
		return dispatch(addQuestionaire(question, option));
	}
});

class HTTPStatusAnswerContainer extends Component {
	initialState = { currentAnswer: [], answered: false, currentSeries: [], currentIndex: 0 };
	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	clearState = () => {
		this.setState(this.initialState);
	};

	onOptionChoose = (question, option) => {
		// addQuestion(question, option.option);
		if (option.action.type === 'node') {
			this.setState({ answered: true, currentAnswer: option.action.value });
		}
		if (option.action.type === 'link') {
			this.setState({ currentIndex: option.action.value });
		}
	};

	render() {
		const { httpCodeSeriesQuestions = [], httpCodeSeries = {} } = this.props;
		const { currentIndex, answered, currentAnswer } = this.state;
		const currentQuestion = httpCodeSeriesQuestions.find(t => t.id === currentIndex);
		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid>
									<Step active>
										<Icon name="cubes" />
										<Step.Content>
											<Step.Title>HTTP Class code</Step.Title>
											<Step.Description>Choose HTTP status code series</Step.Description>
										</Step.Content>
									</Step>
									<Step>
										<Icon name="code" />
										<Step.Content>
											<Step.Title>HTTP Status Code</Step.Title>
											<Step.Description>Choose exact HTTP status code </Step.Description>
										</Step.Content>
									</Step>
								</Step.Group>

								{answered ? (
									<Segment placeholder>
										<Grid.Row>
											<Header as="h2">
												<Icon name="flag checkered" />
												<Header.Content>HTTP Status Code Series </Header.Content>
											</Header>
											<HttpClassCardList httpClassList={httpCodeSeries.filter(t => currentAnswer.includes(t.name))} />
										</Grid.Row>
										<Divider />
										<Grid.Row>
											<Button floated="right" icon="redo" content="Try Again" onClick={this.clearState} />
										</Grid.Row>
									</Segment>
								) : (
									<Segment placeholder>
										<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
									</Segment>
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</React.Fragment>
		);
	}

	QuestionOptionComponent(currentQuestion) {}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HTTPStatusAnswerContainer)
);
