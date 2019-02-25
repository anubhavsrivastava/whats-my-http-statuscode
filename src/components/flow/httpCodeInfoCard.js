import React from 'react';

import { Label, Icon, Card } from 'semantic-ui-react';

const getContent = (color, icon, httpCode, size) => {
	return (
		<Label size={size} color={color} ribbon>
			<Icon name={icon} />
			{httpCode.msg}
		</Label>
	);
};

export default function HttpCodeInfoCard({ httpCode, color, icon, size }) {
	return (
		<Card key={httpCode.code}>
			<Card.Content>
				<Card.Header>
					{httpCode.more ? (
						<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
							{getContent(color, icon, httpCode, size)}
						</a>
					) : (
						getContent(color, icon, httpCode, size)
					)}
				</Card.Header>

				<Card.Description>
					{`${httpCode.description} `}
					{httpCode.more ? (
						<a target="_blank" rel="noopener noreferrer" href={httpCode.more}>
							Learn more
						</a>
					) : null}
				</Card.Description>
			</Card.Content>
		</Card>
	);
}
