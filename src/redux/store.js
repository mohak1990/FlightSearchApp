import {createStore, applyMiddleware} from 'redux';
//import {fromJS} from 'immutable';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {visibilityFilter: {}, todos: {}}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [sagaMiddleware, routerMiddleware(history), logger];

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, initialState, enhancers);

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Async reducer registry

    return store;
}
