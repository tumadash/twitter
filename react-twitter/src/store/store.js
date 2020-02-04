import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import {user} from "./user/reducers";
import {menu} from "./stateMenu/reducers";

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
};

const composedEnhancers = compose(
    applyMiddleware(thunk)
);

const listApp = combineReducers({
    user,
    menu
});

const persistedReducer = persistReducer(persistConfig, listApp);

const store = createStore(
    persistedReducer,
    {},
    composedEnhancers
);

let persistor = persistStore(store);

export {
    store,
    persistor,
};
