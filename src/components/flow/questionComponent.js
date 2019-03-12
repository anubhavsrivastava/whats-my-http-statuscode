import React from 'react';
import { Header, Segment, Icon, Button } from 'semantic-ui-react';

export default function QuestionCompoent(props) {
	const { question, onOptionChoose } = props;
	return question && question.type ? (
		<React.Fragment>
			<Header icon>
				{question.type === 'suggestion' ? <Icon name="exclamation" /> : null}
				{question.type === 'question' ? <Icon name="question" /> : null}

				<h1>{question.mainText}</h1>
			</Header>
			<Segment.Inline>
				{question.options.map((opt, i) => {
					return (
						<Button onClick={() => onOptionChoose(opt)} color={i === 0 ? 'black' : ''} className="title-cased" key={opt.option}>
							{opt.option}
						</Button>
					);
				})}
			</Segment.Inline>
		</React.Fragment>
	) : null;
}
