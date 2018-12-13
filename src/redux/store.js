import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import {fromJS} from 'immutable';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {dashboard: {flights: []}}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [sagaMiddleware, thunk, routerMiddleware(history), logger];

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, initialState, enhancers);

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Async reducer registry

    return store;
}
