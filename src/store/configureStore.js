import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    let composeEnhancers = compose;
    if(process.env.NODE_ENV === 'development') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}

