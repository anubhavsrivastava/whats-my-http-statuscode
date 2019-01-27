import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/common/pageHeader';
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

class FAQContainer extends Component {
	componentDidMount = () => {};

	render() {
		return (
			<React.Fragment>
				<PageHeader title="FAQ - Frequently Asked Questions" />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16} />
						</Grid.Row>
					</Grid>
				</Segment>
			</React.Fragment>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FAQContainer)
);
