import React from 'react';

import { Card } from 'semantic-ui-react';
import HttpSeriesCardMinimal from './httpSeriesCardMinimal';
export default function HttpSeriesCardList(props) {
	const { httpSeriesList, onAction } = props;
	return httpSeriesList && httpSeriesList.length ? (
		<Card.Group itemsPerRow={httpSeriesList.length}>
			{httpSeriesList.map(httpSeries => {
				return <HttpSeriesCardMinimal onAction={onAction} key={httpSeries.name} httpSeries={httpSeries} />;
			})}
		</Card.Group>
	) : null;
}
