import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card, Label, Icon, Tab, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/layouts/pageHeader';

const mapStateToProps = (state, ownProps) => ({
	httpCodeClasses: state.httpInfo.httpCodeClasses,
	httpCodes: state.httpInfo.httpCodes
});

const mapDispatchToProps = dispatch => ({});

const IconMap = { '1xx': 'info', '2xx': 'check', '3xx': 'redo', '4xx': 'computer', '5xx': 'server' };

class HTTPCodeList extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodes = {}, currentClassCode = {} } = this.props;

		const currentList = httpCodes[currentClassCode.name] || [];
		return (
			<Tab.Pane>
				<PageHeader title={`${currentClassCode.name} ${currentClassCode.type}`} />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card.Group itemsPerRow={2}>
									{currentList.map(httpCode => {
										return (
											<Card key={httpCode.url}>
												<Card.Content>
													<Card.Header>
														<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
															<Label color="blue" ribbon>
																<Icon name={IconMap[currentClassCode.name]} />
																{httpCode.msg}
															</Label>
														</a>
													</Card.Header>
													{/* <Card.Meta>{httpCode.repo ? 'Repository' : 'WebhttpCode'}</Card.Meta> */}
													<Card.Description>
														{httpCode.description}{' '}
														<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
															Learn more
														</a>
													</Card.Description>
												</Card.Content>
											</Card>
										);
									})}
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Tab.Pane>
		);
	}
}

class HTTPCodesListContainer extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodes = {}, httpCodeClasses = [] } = this.props;

		let panes = httpCodeClasses.map(classCode => {
			return {
				menuItem: { key: classCode.name, icon: IconMap[classCode.name], content: `${classCode.name} ${classCode.type}` },
				render: () => <HTTPCodeList httpCodes={httpCodes} currentClassCode={classCode} />
			};
		});

		return (
			<React.Fragment>
				<PageHeader title="HTTP Status Codes " />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Tab panes={panes} />
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
	)(HTTPCodesListContainer)
);
