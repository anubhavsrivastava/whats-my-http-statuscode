import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import logo from '../../static/img/logo.svg';

const FixedMenuLayout = props => (
	<div>
		<Menu fixed="top" secondary>
			<Container>
				<Menu.Item as="a" header>
					<Image size="mini" src={logo} />
				</Menu.Item>
				<Menu.Item as="a">Home</Menu.Item>
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
	</div>
);

export default FixedMenuLayout;
