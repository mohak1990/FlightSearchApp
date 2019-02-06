import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../modules';
import logger from 'redux-logger'
import initialObject from './initialState'
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = initialObject, history) {

    const middlewares = [sagaMiddleware, thunk, routerMiddleware(history), logger];

    const enhancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, initialState, enhancers);

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {};
    //have not used redux-saga but can be used for better handling of api actions

    return store;
}
