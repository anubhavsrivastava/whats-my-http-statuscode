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
									<Card.Content header="Inspiration" />
									<Card.Content>
										Inspired by the phenomenal work on HTTP status code selection by{' '}
										<a href="https://codetinkerer.com/2015/12/04/choosing-an-http-status-code.html" rel="noreferrer noopener" target="_blank">
											Michael Kropat - Codetinkerer.com
										</a>
									</Card.Content>

									<Card.Content extra>
										<Icon name="hand peace outline" /> Thanks a lot!
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
