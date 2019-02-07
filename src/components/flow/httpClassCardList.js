import React from 'react';

import { Card } from 'semantic-ui-react';
import HttpClassCardMinimal from './httpClassCardMinimal';
export default function HttpClassCardList(props) {
	const { httpClassList } = props;
	return httpClassList && httpClassList.length ? (
		<Card.Group itemsPerRow={httpClassList.length}>
			{httpClassList.map(httpClass => {
				return <HttpClassCardMinimal key={httpClass.name} httpClass={httpClass} />;
			})}
		</Card.Group>
	) : null;
}
