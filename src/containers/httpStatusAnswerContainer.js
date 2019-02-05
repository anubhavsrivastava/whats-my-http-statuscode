import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Transition, Header, Button, Step, Icon, Grid, Segment } from 'semantic-ui-react';
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
	addQuestion: () => {
		return dispatch(addQuestionaire());
	}
});

class HTTPStatusAnswerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { currentSeries: [], currentIndex: 0 };
	}

	onOptionChoose = (question, opt) => {
		const { addQuestion } = this.props;
		addQuestion(question);
	};
	render() {
		const { httpCodeClassesQuestions = [] } = this.props;
		const { currentIndex } = this.state;
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

								<Segment placeholder>
									<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
								</Segment>
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
