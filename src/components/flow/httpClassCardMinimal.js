import React from 'react';
import { Label, Icon, Card } from 'semantic-ui-react';
import { ColorMap, IconMap } from '../../constant/params';

export default function HttpClassCardMinimal(props) {
	const { httpClass } = props;
	return httpClass ? (
		<Card.Group>
			<Card>
				<Card.Content>
					<Card.Header>
						<Label color={ColorMap[httpClass.name]} ribbon>
							<Icon name={IconMap[httpClass.name]} />
							{httpClass.name}
						</Label>
					</Card.Header>
					{/* <Card.Meta>{httpCode.repo ? 'Repository' : 'WebhttpCode'}</Card.Meta> */}
					<Card.Description>
						{`${httpClass.description} `}
						<a target="_blank" rel="noopener noreferrer" href={httpClass.more}>
							Learn more
						</a>
					</Card.Description>
				</Card.Content>
			</Card>
			<Card fluid color="orange" header="Option 2" />
			<Card fluid color="yellow" header="Option 3" />
		</Card.Group>
	) : null;
}
