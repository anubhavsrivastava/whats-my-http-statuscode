import React from 'react';

import { Label, Icon, Card } from 'semantic-ui-react';

export default function HttpCodeInfoCard({ httpCode, currentClassCode, color, icon }) {
	return (
		<Card key={httpCode.code}>
			<Card.Content>
				<Card.Header>
					<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
						<Label color={color} ribbon>
							<Icon name={icon} />
							{httpCode.msg}
						</Label>
					</a>
				</Card.Header>

				<Card.Description>
					{`${httpCode.description} `}
					<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
						Learn more
					</a>
				</Card.Description>
			</Card.Content>
		</Card>
	);
}
