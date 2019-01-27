import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Label, Card, Grid, Icon, Segment } from 'semantic-ui-react';
import PageHeader from '../components/common/pageHeader';

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
				<PageHeader title="Few recommended resources" />

				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card.Group itemsPerRow={2}>
									{relatedSites.map(site => {
										return (
											<Card key={site.url} color={this.getRandomColor()}>
												<Card.Content>
													<Card.Header>
														<a target="_blank" rel="noopener noreferrer" href={site.url}>
															{site.repo ? (
																<Label color="blue" ribbon>
																	<Icon name="lab" />
																	Repository
																</Label>
															) : (
																<Label color="orange" ribbon>
																	<Icon name="at" />
																	Website
																</Label>
															)}

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
