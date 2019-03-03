import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dropdown, Button, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../../components/flow/questionComponent';
import HttpCodeCardList from '../../components/flow/httpCodeCardList';
import ContentHeader from '../../components/common/contentHeader';
import { IconMap } from '../../constant/params';
import RoutesMapping from '../../constant/routes';
const Routes = RoutesMapping.getRoutes();
const mapStateToProps = (state, ownProps) => ({
	httpCodes: state.httpInfo.httpCodes,
	httpCodeSeries: state.httpInfo.httpCodeSeries,
	httpCodesQuestions: state.httpInfo.questions.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusCodeAnswerContainer extends Component {
	initialState = { sequence: [0], currentAnswer: [], answered: false, currentIndex: 0 };

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

	onSeriesSelection = (e, d) => {
		if (this.props.match.params.option !== d.value) {
			this.props.history.push(`${Routes.HTTPSTATUSANSWER.path}/${this.props.match.params.tabid}/${d.value}`);
		}
	};

	undoQuestion = () => {
		const { sequence } = this.state;
		const prevQuestion = sequence.pop();
		this.setState({ answered: false, sequence: [...sequence], currentIndex: prevQuestion });
	};

	clearState = () => {
		this.setState(Object.assign({}, this.initialState));
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

	getSeriesFromAnswer = code => {
		return code[0] + 'xx';
	};

	render() {
		const { httpCodesQuestions = {}, httpCodes = {}, httpCodeSeries = [] } = this.props;
		const { currentIndex, answered, currentAnswer, sequence } = this.state;
		const { option: currentSeries = '' } = this.props.match.params;

		let currentQuestion = {};
		let currentSeriesObj = {};
		let currentAnswerSeries = '';
		if (currentSeries && httpCodesQuestions[currentSeries]) {
			currentQuestion = httpCodesQuestions[currentSeries].find(t => t.id === currentIndex);
		}

		if (answered) {
			currentAnswerSeries = this.getSeriesFromAnswer(currentAnswer[0]);
			currentSeriesObj = httpCodeSeries.find(t => t.name === currentAnswerSeries);
		}
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Dropdown defaultValue={currentSeries} onChange={this.onSeriesSelection} placeholder="Select Series" fluid selection options={this.getHttpSeriesDropDown()} />
								{currentSeries ? (
									answered ? (
										<React.Fragment>
											<ContentHeader icon={IconMap[currentSeriesObj.name]} description={currentSeriesObj.description} title={`${currentSeriesObj.name} ${currentSeriesObj.type}`} />
											<Segment vertical>
												<Grid container stackable verticalAlign="middle">
													<Grid.Row>
														<Grid.Column width={16}>
															<HttpCodeCardList currentSeries={currentAnswerSeries} httpCodeList={httpCodes[currentAnswerSeries].filter(t => currentAnswer.includes(t.code.toString()))} />
														</Grid.Column>
													</Grid.Row>
													<Grid.Row>
														<Grid.Column width={16}>
															<Button floated="right" icon="redo" color="black" content="Try Again" onClick={this.clearState} />
															{sequence.length > 1 ? <Button floated="right" icon="undo" content="Back" onClick={this.undoQuestion} /> : null}
														</Grid.Column>
													</Grid.Row>
												</Grid>
											</Segment>
										</React.Fragment>
									) : (
										<Segment placeholder raised>
											<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
											<Grid.Row style={{ minHeight: '50px' }}>
												<Grid.Column width={16}>{sequence.length > 1 ? <Button floated="right" icon="undo" content="Back" onClick={this.undoQuestion} /> : null}</Grid.Column>
											</Grid.Row>
										</Segment>
									)
								) : null}
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
