import React from 'react';

import { Label, Icon, Card } from 'semantic-ui-react';
import { ColorMap, IconMap } from '../../constant/params';
export default function HttpClassCardMinimal(props) {
	const { httpClass } = props;
	return httpClass ? (
		<Card>
			<Card.Content>
				<Card.Header>
					<Label color={ColorMap[httpClass.name]}>
						<Icon name={IconMap[httpClass.name]} />
						{httpClass.name} {httpClass.type}
					</Label>
				</Card.Header>

				<Card.Description>
					{`${httpClass.description} `}
					<a target="_blank" rel="noopener noreferrer" href={httpClass.more}>
						Learn more
					</a>
				</Card.Description>
			</Card.Content>
		</Card>
	) : null;
}
