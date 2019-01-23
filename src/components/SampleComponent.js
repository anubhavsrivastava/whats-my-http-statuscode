import React, { Component } from 'react';
import logo from '../static/img/logo.svg';
import { Button, Intent, Spinner } from '@blueprintjs/core';

class SampleComponent extends Component {
	render() {
		const { name } = this.props;

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to {name}</h1>
					<Spinner intent={Intent.PRIMARY} />
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default SampleComponent;
