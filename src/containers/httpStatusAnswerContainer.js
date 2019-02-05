import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Transition, Header, Button, Step, Icon, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../components/flow/questionComponent';
import PageHeader from '../components/common/pageHeader';
const mapStateToProps = (state, ownProps) => ({
	relatedSites: state.httpInfo.sites,
	httpCodeClasses: state.httpInfo.httpCodeClasses,
	httpCodes: state.httpInfo.httpCodes,
	httpCodeClassesQuestions: state.httpInfo.questions.httpCodeClasses,
	httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusAnswerContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { currentSeries: [], currentQuestion: null };
	}
	componentDidMount = () => {
		const { httpCodeClassesQuestions = [] } = this.props;

		const currentQuestion = httpCodeClassesQuestions.find(t => t.id === 0);

		this.setState({ currentQuestion });
		console.log(currentQuestion);
	};

	onOptionChoose = (question, opt) => {
		this.setState({ question: false });
	};
	render() {
		// const { currentQuestion } = this.state;
		const { httpCodeClassesQuestions = [] } = this.props;

		const currentQuestion = httpCodeClassesQuestions.find(t => t.id === 0);

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
									<QuestionComponent question={currentQuestion} />
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
