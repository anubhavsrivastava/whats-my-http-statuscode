import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/appContainer';

const initialState = {
	application: {
		version: '0.0.0',
		name: 'application'
	}
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
