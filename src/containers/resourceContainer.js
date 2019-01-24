import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Card, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';
const mapStateToProps = (state, ownProps) => ({
	relatedSites: state.httpInfo.sites
});

const mapDispatchToProps = dispatch => ({
	updateApplicationInfo: () => {}
});

class ResourceContainer extends Component {
	componentDidMount = () => {};

	render() {
		const { relatedSites = [] } = this.props;
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Header as="h1">Few recommended resources</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card.Group itemsPerRow={2}>
									{relatedSites.map(site => {
										return (
											<Card key={site.name} color="orange">
												<Card.Content>
													<Card.Header>
														<a target="_blank" rel="noopener noreferrer" href={site.url}>
															{site.name}
														</a>
													</Card.Header>
													<Card.Meta>{site.repo ? 'Repository' : 'Website'}</Card.Meta>
													<Card.Description>{site.description}</Card.Description>
												</Card.Content>
											</Card>
										);
									})}
								</Card.Group>
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
	)(ResourceContainer)
);
