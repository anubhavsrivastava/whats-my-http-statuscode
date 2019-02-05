import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Step, Icon, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../components/flow/questionComponent';
import PageHeader from '../components/common/pageHeader';
import { addQuestionaire } from '../actions/questionaireAction';
const mapStateToProps = (state, ownProps) => ({
	relatedSites: state.httpInfo.sites,
	httpCodeClasses: state.httpInfo.httpCodeClasses,
	httpCodes: state.httpInfo.httpCodes,
	httpCodeClassesQuestions: state.httpInfo.questions.httpCodeClasses,
	httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({
	addQuestion: (question, option) => {
		return dispatch(addQuestionaire(question, option));
	}
});

class HTTPStatusAnswerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { answered: false, currentSeries: [], currentIndex: 0 };
	}

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
		const { httpCodeClassesQuestions = [] } = this.props;
		const { currentIndex, answered, currentAnswer } = this.state;
		const currentQuestion = httpCodeClassesQuestions.find(t => t.id === currentIndex);

		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid>
									<Step active>
										<Icon name="question circle" />
										<Step.Content>
											<Step.Title>Category</Step.Title>
											<Step.Description>Choose your class of HTTP code</Step.Description>
										</Step.Content>
									</Step>
									<Step disabled>
										<Icon name="cubes" />
										<Step.Content>
											<Step.Title>Questions</Step.Title>
											<Step.Description>Answer few questions</Step.Description>
										</Step.Content>
									</Step>
									<Step disabled>
										<Icon name="code" />
										<Step.Content>
											<Step.Title>Answer</Step.Title>
											<Step.Description>HTTP Status code your API should return</Step.Description>
										</Step.Content>
									</Step>
								</Step.Group>

								<Segment placeholder>{answered ? currentAnswer : <QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />}</Segment>
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
