import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Step, Icon, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../../components/common/pageHeader';
import HttpStatusSeriesAnswerContainer from './httpStatusSeriesAnswerContainer';
import HttpStatusCodeAnswerContainer from './httpStatusCodeAnswerContainer';
import RoutesMapping from '../../constant/routes';
const Routes = RoutesMapping.getRoutes();

class HTTPStatusAnswerContainer extends Component {
	switchTab = tabid => {
		if (this.props.match.params.tabid !== tabid) {
			this.props.history.push(`${Routes.HTTPSTATUSANSWER.path}/${tabid}`);
		}
	};

	render() {
		const { tabid = 'series' } = this.props.match.params;

		return (
			<React.Fragment>
				<PageHeader title="What's my HTTP status?" />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Step.Group fluid stackable="tablet">
									<Step active={tabid === 'series'} onClick={() => this.switchTab('series')} link>
										<Icon name="cubes" />
										<Step.Content>
											<Step.Title>HTTP Status Code Series</Step.Title>
											<Step.Description>Choose HTTP status code series</Step.Description>
										</Step.Content>
									</Step>
									<Step active={tabid === 'code'} onClick={() => this.switchTab('code')} link>
										<Icon name="code" />
										<Step.Content>
											<Step.Title>HTTP Status Code</Step.Title>
											<Step.Description>Choose exact HTTP status code </Step.Description>
										</Step.Content>
									</Step>
								</Step.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					{tabid === 'series' ? <HttpStatusSeriesAnswerContainer /> : null}
					{tabid === 'code' ? <HttpStatusCodeAnswerContainer /> : null}
				</Segment>
			</React.Fragment>
		);
	}
}

export default withRouter(HTTPStatusAnswerContainer);
