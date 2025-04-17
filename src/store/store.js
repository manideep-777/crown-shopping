import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';

import { rootReducer } from './root-reducer';
// import { loggerMiddleware } from '../middleware/logger';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// const middleWares = [loggerMiddleware];

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean) ;

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);


