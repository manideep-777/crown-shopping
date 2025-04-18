import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
// import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
// import { loggerMiddleware } from '../middleware/logger';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
// const middleWares = [loggerMiddleware];

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean) ;

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


