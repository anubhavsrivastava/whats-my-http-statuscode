import React from 'react';
import { Container, Icon, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import logo from '../../static/img/logo.svg';

const FixedMenuLayout = props => (
	<div>
		<Segment inverted>
			<Menu inverted secondary>
				<Container>
					<Menu.Item as="a" header>
						<Image size="mini" className={'inverted-color'} src={logo} />
					</Menu.Item>
					<Menu.Item as="a" link>
						<a href="#/resource">
							<Icon name="lab" />
							Resources
						</a>
					</Menu.Item>
					<Menu.Item as="a" link1="#/httpcodedetails">
						<a href="#/httpcodedetails">
							<Icon name="code" />
							HTTP Codes Info
						</a>
					</Menu.Item>
					{/* <Dropdown item simple text="Dropdown">
					<Dropdown.Menu>
						<Dropdown.Item>List Item</Dropdown.Item>
						<Dropdown.Item>List Item</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Header>Header Item</Dropdown.Header>
						<Dropdown.Item>
							<i className="dropdown icon" />
							<span className="text">Submenu</span>
							<Dropdown.Menu>
								<Dropdown.Item>List Item</Dropdown.Item>
								<Dropdown.Item>List Item</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown.Item>
						<Dropdown.Item>List Item</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown> */}
				</Container>
			</Menu>
		</Segment>
		{props.children}
	</div>
);

export default FixedMenuLayout;
