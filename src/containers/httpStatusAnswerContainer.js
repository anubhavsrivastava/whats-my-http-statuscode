import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Step, Icon, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/common/pageHeader';
const mapStateToProps = (state, ownProps) => ({
	httpCodeClasses: state.httpInfo.httpCodeClasses,
	httpCodes: state.httpInfo.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPStatusAnswerContainer extends Component {
	componentDidMount = () => {};

	render() {
		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid>
									<Step>
										<Icon name="plane" />
										<Step.Content>
											<Step.Title>Shipping</Step.Title>
											<Step.Description>Choose your shipping options</Step.Description>
										</Step.Content>
									</Step>
									<Step active>
										<Icon name="dollar" />
										<Step.Content>
											<Step.Title>Billing</Step.Title>
											<Step.Description>Enter billing information</Step.Description>
										</Step.Content>
									</Step>
									<Step disabled>
										<Icon name="info circle" />
										<Step.Content>
											<Step.Title>Confirm Order</Step.Title>
											<Step.Description>Verify order details</Step.Description>
										</Step.Content>
									</Step>
								</Step.Group>
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
	)(HTTPStatusAnswerContainer)
);
