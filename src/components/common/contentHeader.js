import React from 'react';
import { Icon, Grid, Header, Segment } from 'semantic-ui-react';

export default function ContentHeader(props) {
	const { title, description, icon } = props;
	return (
		<Segment vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={16}>
						<Header as="h2">
							{icon ? <Icon name={icon} /> : null}
							<Header.Content>{title}</Header.Content>
							<Header.Subheader>{description}</Header.Subheader>
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}
