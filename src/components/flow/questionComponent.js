import React from 'react';
import { Header, Segment, Icon, Button } from 'semantic-ui-react';

export default function QuestionCompoent(props) {
	const { question, onOptionChoose } = props;
	return question ? (
		<React.Fragment>
			<Header icon>
				{question.type === 'suggestion' ? <Icon name="exclamation" /> : null}
				{question.type === 'question' ? <Icon name="question" /> : null}
				{question.mainText}
			</Header>
			<Segment.Inline>
				{question.options.map((opt, i) => {
					return (
						<Button onClick={() => onOptionChoose(opt)} primary={i === 0} className="title-cased" key={opt.option}>
							{opt.option}
						</Button>
					);
				})}
			</Segment.Inline>
		</React.Fragment>
	) : null;
}
