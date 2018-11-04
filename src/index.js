import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import AppContainer from './containers/appContainer';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppContainer />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
