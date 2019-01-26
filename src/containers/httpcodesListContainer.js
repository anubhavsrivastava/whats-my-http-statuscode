import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Tab, Grid, Segment } from 'semantic-ui-react';
import PageHeader from '../components/layouts/pageHeader';

const mapStateToProps = (state, ownProps) => ({
	httpCodeClasses: state.httpInfo.httpCodeClasses
});

const mapDispatchToProps = dispatch => ({});

const IconMap = { '1xx': 'info', '2xx': 'check', '3xx': 'redo', '4xx': 'computer', '5xx': 'server' };
class HTTPCodesListContainer extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodeClasses = [] } = this.props;

		let panes = httpCodeClasses.map(classCode => {
			return {
				menuItem: { key: classCode.name, icon: IconMap[classCode.name], content: `${classCode.name} ${classCode.type}` },
				render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
			};
		});

		return (
			<React.Fragment>
				<PageHeader title="HTTP Status Codes " />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Tab panes={panes} />
							</Grid.Column>
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
	)(HTTPCodesListContainer)
);
