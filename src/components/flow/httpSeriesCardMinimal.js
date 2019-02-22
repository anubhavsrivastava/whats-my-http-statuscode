import React from 'react';

import { Label, Icon, Button, Card } from 'semantic-ui-react';
import { ColorMap, IconMap } from '../../constant/params';
export default function HttpSeriesCardMinimal(props) {
	const { httpSeries, onAction } = props;
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
			{onAction ? (
				<Card.Content meta>
					<Button
						icon="code"
						color="black"
						content="Find exact HTTP code"
						onClick={() => {
							onAction(httpSeries.name);
						}}
					/>
				</Card.Content>
			) : null}
		</Card>
	) : null;
}
