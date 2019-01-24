import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Card, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
	updateApplicationInfo: () => {}
});

class ResourceContainer extends Component {
	componentDidMount = () => {};

	render() {
		return (
			<React.Fragment>
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={8}>
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
									<Card color="orange" header="Elliot Baker" meta="Friend" description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
									<Card color="orange" header="Elliot Baker" meta="Friend" description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
									<Card color="orange" header="Elliot Baker" meta="Friend" description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
									<Card color="orange" header="Elliot Baker" meta="Friend" description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
									<Card color="orange" header="Elliot Baker" meta="Friend" description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." />
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				{/* <Segment style={{ padding: '0em' }} vertical>
					<Grid celled="internally" columns="equal" stackable>
						<Grid.Row textAlign="center">
							<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
								<Header as="h3" style={{ fontSize: '2em' }}>
									"What a Company"
								</Header>
								<p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
							</Grid.Column>
							<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
								<Header as="h3" style={{ fontSize: '2em' }}>
									"I shouldn't have gone with their competitor."
								</Header>
								<p style={{ fontSize: '1.33em' }}>
									<Image avatar src="/images/avatar/large/nan.jpg" />
									<b>Nan</b> Chief Fun Officer Acme Toys
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment> */}
				{/* <Segment style={{ padding: '8em 0em' }} vertical>
					<Container text>
						<Header as="h3" style={{ fontSize: '2em' }}>
							Breaking The Grid, Grabs Your Attention
						</Header>
						<p style={{ fontSize: '1.33em' }}>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
						<Button as="a" size="large">
							Read More
						</Button>
						<Divider as="h4" className="header" horizontal style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
							<a href="#">Case Studies</a>
						</Divider>
						<Header as="h3" style={{ fontSize: '2em' }}>
							Did We Tell You About Our Bananas?
						</Header>
						<p style={{ fontSize: '1.33em' }}>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
						<Button as="a" size="large">
							I'm Still Quite Interested
						</Button>
					</Container>
				</Segment> */}
				{/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
					<Container>
						<Grid divided inverted stackable>
							<Grid.Row>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="About" />
									<List link inverted>
										<List.Item as="a">Sitemap</List.Item>
										<List.Item as="a">Contact Us</List.Item>
										<List.Item as="a">Religious Ceremonies</List.Item>
										<List.Item as="a">Gazebo Plans</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={3}>
									<Header inverted as="h4" content="Services" />
									<List link inverted>
										<List.Item as="a">Banana Pre-Order</List.Item>
										<List.Item as="a">DNA FAQ</List.Item>
										<List.Item as="a">How To Access</List.Item>
										<List.Item as="a">Favorite X-Men</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column width={7}><Header as="h4" inverted>
										Footer Header
									</Header>
									<p>Extra space for a call to action inside the footer that could help re-engage users.</p></Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Segment> */}
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
