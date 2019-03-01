import React from 'react';
import { List, Container, Icon, Image, Menu, Segment } from 'semantic-ui-react';
import logo from '../../static/img/logo.svg';
const fixed = false;
const FixedMenuLayout = props => (
	<>
		<Segment inverted textAlign="center" vertical>
			<Menu stackable fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/anubhavsrivastava/whats-my-http-statuscode" className="github-corner" aria-label="Star on Github">
					<svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#70B7FD', color: '#fff', position: 'absolute', top: '0', border: '0', right: '0' }} aria-hidden="true">
						<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
						<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm" />
						<path
							d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
							fill="currentColor"
							className="octo-body"
						/>
					</svg>
				</a>
				<Container>
					<Menu.Item id="header-logo" link>
						<a href="#/">
							<Image size="mini" className={'inverted-color'} src={logo} />
						</a>
					</Menu.Item>
					<Menu.Item as="a" href="#/httpcodedetails" link>
						<Icon name="code" />
						HTTP Status Codes
					</Menu.Item>
					<Menu.Item as="a" href="#/resource" link>
						<Icon name="lab" />
						Resources
					</Menu.Item>
					<Menu.Item as="a" href="#/faq" link>
						<Icon name="question" />
						FAQ
					</Menu.Item>
				</Container>
			</Menu>
		</Segment>
		<main style={{ paddingBottom: '48px' }}>
			<Segment>{props.children}</Segment>
		</main>
		<footer style={{ bottom: 0, position: 'absolute', width: '100%', height: '48px' }}>
			<Segment inverted vertical>
				<Container textAlign="center">
					{/* <Grid divided inverted stackable>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Group 1" />
							<List link inverted>
								<List.Item as="a">Link One</List.Item>
								<List.Item as="a">Link Two</List.Item>
								<List.Item as="a">Link Three</List.Item>
								<List.Item as="a">Link Four</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Group 2" />
							<List link inverted>
								<List.Item as="a">Link One</List.Item>
								<List.Item as="a">Link Two</List.Item>
								<List.Item as="a">Link Three</List.Item>
								<List.Item as="a">Link Four</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Group 3" />
							<List link inverted>
								<List.Item as="a">Link One</List.Item>
								<List.Item as="a">Link Two</List.Item>
								<List.Item as="a">Link Three</List.Item>
								<List.Item as="a">Link Four</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header inverted as="h4" content="Footer Header" />
							<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
						</Grid.Column>
					</Grid> */}

					{/* <Divider inverted section /> */}
					{/* <Image centered size="mini" src="/logo.png" /> */}
					<List horizontal inverted divided link size="small">
						<List.Item as="a" href="#">
							Site Map
						</List.Item>
						<List.Item as="a" href="#">
							Contact Us
						</List.Item>
						<List.Item as="a" href="#">
							Terms and Conditions
						</List.Item>
						<List.Item as="a" href="#">
							Privacy Policy
						</List.Item>
					</List>
				</Container>
			</Segment>
		</footer>
	</>
);

export default FixedMenuLayout;
