import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Label, Card, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';

const CardColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
const mapStateToProps = (state, ownProps) => ({
	relatedSites: state.httpInfo.sites
});

const mapDispatchToProps = dispatch => ({
	updateApplicationInfo: () => {}
});

class ResourceContainer extends Component {
	componentDidMount = () => {};

	getRandomColor = () => {
		return CardColors[Math.floor(Math.random() * CardColors.length)];
	};

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
											<Card key={site.name} color={this.getRandomColor()}>
												<Card.Content>
													<Card.Header>
														{site.repo ? (
															<Label as="a" color="blue" ribbon>
																<Icon name="lab" />
																Repository
															</Label>
														) : (
															<Label as="a" color="orange" ribbon>
																<Icon name="at" />
																Website
															</Label>
														)}

														<a target="_blank" rel="noopener noreferrer" href={site.url}>
															{site.name}
														</a>
													</Card.Header>
													{/* <Card.Meta>{site.repo ? 'Repository' : 'Website'}</Card.Meta> */}
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
