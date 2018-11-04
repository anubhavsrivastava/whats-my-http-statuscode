import React, { Component } from 'react';
import logo from '../static/img/logo.svg';

class SampleComponent extends Component {
	render() {
		const { name } = this.props;

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to {name}</h1>

					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default SampleComponent;
