import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

export default function PageHeader(props) {
	const { title } = props;
	return (
		<Segment vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={16}>
						<Header as="h1">{title}</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}
