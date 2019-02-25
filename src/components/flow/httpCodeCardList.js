import React from 'react';

import { Card } from 'semantic-ui-react';
import HttpCodeInfoCard from './httpCodeInfoCard';
import { ColorMap, IconMap } from '../../constant/params';
export default function HttpCodeCardList(props) {
	const { httpCodeList, currentSeries } = props;
	return httpCodeList && httpCodeList.length ? (
		<Card.Group itemsPerRow={httpCodeList.length}>
			{httpCodeList.map(httpCode => {
				return <HttpCodeInfoCard size="big" key={httpCode.code} httpCode={httpCode} color={ColorMap[currentSeries]} icon={IconMap[currentSeries]} />;
			})}
		</Card.Group>
	) : null;
}
