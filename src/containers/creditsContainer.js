import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Icon, Card, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/common/pageHeader';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

class CreditsContainer extends Component {
	componentDidMount = () => {};

	render() {
		return (
			<React.Fragment>
				<PageHeader title="Credits/Inspiration" />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card fluid>
									<Card.Content>
										<Icon name="hand peace outline" />
										Inspiration
									</Card.Content>
									<Card.Content>
										Inspired by the phenomenal work on HTTP status code selection by -
										<a href="https://codetinkerer.com/2015/12/04/choosing-an-http-status-code.html" rel="noreferrer noopener" target="_blank">
											Michael Kropat - Codetinkerer.com
										</a>
									</Card.Content>
								</Card>
								<Card fluid>
									<Card.Content>
										<Icon name="users" />
										Contributors
									</Card.Content>
									<Card.Content>
										<a href="https://github.com/anshulguleria" rel="noreferrer noopener" target="_blank">
											Anshul Guleria
										</a>
										<br />
										<a href="https://github.com/chiragswadia" rel="noreferrer noopener" target="_blank">
											Chirag Swadia
										</a>
									</Card.Content>
									<Card.Content extra>A big THANK YOU to these wonderful people!</Card.Content>
								</Card>
								<Card fluid>
									<Card.Content>
										<Icon name="code" />
										Technical Stack
									</Card.Content>
									<Card.Content>
										React/Redux
										<br />
										<a href="https://react.semantic-ui.com" rel="noreferrer noopener" target="_blank">
											Semantic UI React
										</a>
										- for Design and Components
									</Card.Content>
								</Card>
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
	)(CreditsContainer)
);
