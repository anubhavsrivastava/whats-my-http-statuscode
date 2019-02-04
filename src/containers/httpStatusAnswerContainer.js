import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header, Button, Step, Icon, Grid, Segment } from 'semantic-ui-react';
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
	componentDidMount = () => {};

	render() {
		const { httpCodeClassesQuestions = [] } = this.props;
		const currentQuestion = httpCodeClassesQuestions.find(t => t.id === 0);
		console.log(currentQuestion);
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

								{currentQuestion ? (
									<Segment placeholder>
										<Header icon>
											<Icon name="question" />
											{currentQuestion.mainText}
										</Header>
										<Segment.Inline>
											{currentQuestion.options.map(opt => {
												return (
													<Button className="title-cased" key={opt.option}>
														{opt.option}
													</Button>
												);
											})}
										</Segment.Inline>
									</Segment>
								) : null}
							</Grid.Column>
						</Grid.Row>
						{/* <Segment vertical>
							<Grid container stackable verticalAlign="middle">
								<Grid.Row>
									<Grid.Column width={16}>
										<Card.Group itemsPerRow={2}>
											{httpCodeClasses.map(classCode => {
												return (
													<Card key={classCode.name}>
														<Card.Content>
															<Card.Header>
																<a target="_blank" rel="noopener noreferrer" href={classCode.url}>
																	{classCode.name}
																</a>
															</Card.Header>
															<Card.Description>{classCode.description}</Card.Description>
														</Card.Content>
													</Card>
												);
											})}

											{JSON.stringify(httpCodeClassesQuestions[0])}
											
										</Card.Group>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment> */}
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
	)(HTTPStatusAnswerContainer)
);
