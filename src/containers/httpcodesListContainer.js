import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card, Tab, Grid, Segment } from 'semantic-ui-react';
import { IconMap, ColorMap } from '../constant/params';
import PageHeader from '../components/common/pageHeader';
import ContentHeader from '../components/common/contentHeader';
import HttpCodeInfoCard from '../components/flow/httpCodeInfoCard';
const mapStateToProps = (state, ownProps) => ({
	httpCodeSeries: state.httpInfo.httpCodeSeries,
	httpCodes: state.httpInfo.httpCodes
});

const mapDispatchToProps = dispatch => ({});

class HTTPCodeList extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodes = {}, currentSeriesCode = {} } = this.props;

		const currentList = httpCodes[currentSeriesCode.name] || [];
		return (
			<Tab.Pane>
				<ContentHeader icon={IconMap[currentSeriesCode.name]} description={currentSeriesCode.description} title={`${currentSeriesCode.name} ${currentSeriesCode.type}`} />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Card.Group itemsPerRow={2}>
									{currentList.map(httpCode => {
										return <HttpCodeInfoCard key={httpCode.code} httpCode={httpCode} color={ColorMap[currentSeriesCode.name]} icon={IconMap[currentSeriesCode.name]} />;
									})}
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Tab.Pane>
		);
	}
}

class HTTPCodesListContainer extends Component {
	componentDidMount = () => {};

	render() {
		const { httpCodes = {}, httpCodeSeries = [] } = this.props;

		let panes = httpCodeSeries.map(SeriesCode => {
			return {
				menuItem: { color: ColorMap[SeriesCode.name], key: SeriesCode.name, icon: IconMap[SeriesCode.name], content: `${SeriesCode.name} ${SeriesCode.type}` },
				render: () => <HTTPCodeList httpCodes={httpCodes} currentSeriesCode={SeriesCode} />
			};
		});

		return (
			<React.Fragment>
				<PageHeader title="HTTP Status Codes " />
				<Segment vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={16}>
								<Tab menu={{ attached: false, tabular: false }} panes={panes} />
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
