import React from 'react';

import { Label, Icon, Card } from 'semantic-ui-react';
import { ColorMap, IconMap } from '../../constant/params';
export default function HttpSeriesCardMinimal(props) {
	const { httpSeries } = props;
	return httpSeries ? (
		<Card>
			<Card.Content>
				<Card.Header>
					<Label size={'big'} ribbon color={ColorMap[httpSeries.name]}>
						<Icon name={IconMap[httpSeries.name]} />
						{httpSeries.name} {httpSeries.type}
					</Label>
				</Card.Header>

				<Card.Description>
					{`${httpSeries.description} `}
					{httpSeries.more ? (
						<a target="_blank" rel="noopener noreferrer" href={httpSeries.more}>
							Learn more
						</a>
					) : null}
				</Card.Description>
			</Card.Content>
		</Card>
	) : null;
}
