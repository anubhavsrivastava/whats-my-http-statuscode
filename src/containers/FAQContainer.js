import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/common/pageHeader';
import FAQ from './FAQ.json';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

class FAQContainer extends Component {
	componentDidMount = () => { };

	render() {
		return (
			<>
				<PageHeader title="FAQ - Frequently Asked Questions" />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								{FAQ.map(f => {
									return (
										<React.Fragment key={f.scheme.heading}>
											<h3>{f.scheme.heading}</h3>
											{f.scheme.content.map((c, i) => {
												return <span key={i}>{c}</span>;
											})}
										</React.Fragment>
									);
								})}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FAQContainer)
);
