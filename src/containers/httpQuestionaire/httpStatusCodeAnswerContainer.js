import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dropdown, Button, Grid, Segment } from 'semantic-ui-react';
import QuestionComponent from '../../components/flow/questionComponent';
import HttpCodeCardList from '../../components/flow/httpCodeCardList';
import ContentHeader from '../../components/common/contentHeader';
import { IconMap } from '../../constant/params';
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

	onSeriesSelection = (e, d) => {
		this.setState({ ...this.initialState, currentSeries: d.value });
	};

	clearState = () => {
		this.setState(Object.assign({}, this.initialState, { currentSeries: this.state.currentSeries }));
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
		const { httpCodesQuestions = {}, httpCodes = {}, httpCodeSeries = [] } = this.props;
		const { currentIndex, answered, currentAnswer, currentSeries } = this.state;
		let currentQuestion = {};
		let currentSeriesObj = {};
		if (currentSeries) {
			currentQuestion = httpCodesQuestions[currentSeries].find(t => t.id === currentIndex);
			currentSeriesObj = httpCodeSeries.find(t => t.name === currentSeries);
		}
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid className="container-box" container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Dropdown onChange={this.onSeriesSelection} placeholder="Select Series" fluid selection options={this.getHttpSeriesDropDown()} />
								{currentSeries ? (
									answered ? (
										<React.Fragment>
											<ContentHeader icon={IconMap[currentSeriesObj.name]} description={currentSeriesObj.description} title={`${currentSeriesObj.name} ${currentSeriesObj.type}`} />

											<Segment vertical>
												<Grid container stackable verticalAlign="middle">
													<Grid.Row>
														<Grid.Column width={16}>
															<HttpCodeCardList currentSeries={currentSeries} httpCodeList={httpCodes[currentSeries].filter(t => currentAnswer.includes(t.code.toString()))} />
														</Grid.Column>
													</Grid.Row>
													<Grid.Row>
														<Grid.Column width={16}>
															<Button floated="right" icon="redo" color="black" content="Try Again" onClick={this.clearState} />
														</Grid.Column>
													</Grid.Row>
												</Grid>
											</Segment>
										</React.Fragment>
									) : (
										<Segment placeholder>
											<QuestionComponent onOptionChoose={this.onOptionChoose.bind(this, currentQuestion)} question={currentQuestion} />
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
