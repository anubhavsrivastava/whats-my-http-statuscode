import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card, Label, Icon, Tab, Grid, Segment } from 'semantic-ui-react';
import { IconMap, ColorMap } from '../constant/params';
import PageHeader from '../components/common/pageHeader';
import ContentHeader from '../components/common/contentHeader';
const mapStateToProps = (state, ownProps) => ({
	httpCodeClasses: state.httpInfo.httpCodeClasses,
	httpCodes: state.httpInfo.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPCodeList extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodes = {}, currentClassCode = {} } = this.props;

		const currentList = httpCodes[currentClassCode.name] || [];
		return (
			<Tab.Pane>
				<ContentHeader icon={IconMap[currentClassCode.name]} description={currentClassCode.description} title={`${currentClassCode.name} ${currentClassCode.type}`} />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card.Group itemsPerRow={2}>
									{currentList.map(httpCode => {
										return (
											<Card key={httpCode.code}>
												<Card.Content>
													<Card.Header>
														<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
															<Label color={ColorMap[currentClassCode.name]} ribbon>
																<Icon name={IconMap[currentClassCode.name]} />
																{httpCode.msg}
															</Label>
														</a>
													</Card.Header>
													{/* <Card.Meta>{httpCode.repo ? 'Repository' : 'WebhttpCode'}</Card.Meta> */}
													<Card.Description>
														{`${httpCode.description} `}
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
				menuItem: { color: ColorMap[classCode.name], key: classCode.name, icon: IconMap[classCode.name], content: `${classCode.name} ${classCode.type}` },
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
								<Tab menu={{ attached: false, tabular: false }} panes={panes} />
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
