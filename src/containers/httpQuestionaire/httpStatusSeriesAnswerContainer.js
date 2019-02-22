import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Divider, Button, Header, Icon, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../../components/flow/questionComponent';
import HttpSeriesCardList from '../../components/flow/httpSeriesCardList';
import RoutesMapping from '../../constant/routes';
const Routes = RoutesMapping.getRoutes();
const mapStateToProps = (state, ownProps) => ({
	httpCodeSeries: state.httpInfo.httpCodeSeries,
	httpCodeSeriesQuestions: state.httpInfo.questions.httpCodeSeries
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusSeriesAnswerContainer extends Component {
	initialState = { sequence: [0], currentAnswer: [], answered: false, currentSeries: [], currentIndex: 0 };
	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	clearState = () => {
		this.setState(this.initialState);
	};

	undoQuestion = () => {
		const { sequence } = this.state;
		const prevQuestion = sequence.pop();
		this.setState({ sequence: [...sequence], currentIndex: prevQuestion });
	};
	chooseCodeTab = seriesName => {
		this.props.history.push(`${Routes.HTTPSTATUSANSWER.path}/code/${seriesName}`);
	};

	onOptionChoose = (question, option) => {
		if (option.action.type === 'node') {
			this.setState({ answered: true, currentAnswer: option.action.value });
		}
		if (option.action.type === 'link') {
			this.setState({ currentIndex: option.action.value });
		}

		this.setState({ sequence: [...this.state.sequence, question.id] });
	};

	render() {
		const { httpCodeSeriesQuestions = [], httpCodeSeries = {} } = this.props;
		const { currentIndex, answered, currentAnswer, sequence } = this.state;
		const currentQuestion = httpCodeSeriesQuestions.find(t => t.id === currentIndex);
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								{answered ? (
									<Segment vertical>
										<Grid container stackable verticalAlign="middle">
											<Grid.Row>
												<Grid.Column width={16}>
													<Header as="h2">
														<Icon name="flag checkered" />
														<Header.Content>HTTP Status Code Series </Header.Content>
													</Header>
													<HttpSeriesCardList onAction={this.chooseCodeTab} httpSeriesList={httpCodeSeries.filter(t => currentAnswer.includes(t.name))} />
												</Grid.Column>
											</Grid.Row>
											<Divider />
											<Grid.Row>
												<Grid.Column width={16}>
													<Button floated="right" icon="redo" color="black" content="Try Again" onClick={this.clearState} />
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</Segment>
								) : (
									<Segment placeholder raised>
										<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
										<Grid.Row style={{ minHeight: '50px' }}>
											<Grid.Column width={16}>{sequence.length > 1 ? <Button floated="right" icon="undo" content="Back" onClick={this.undoQuestion} /> : null}</Grid.Column>
										</Grid.Row>
									</Segment>
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
	)(HTTPStatusSeriesAnswerContainer)
);
