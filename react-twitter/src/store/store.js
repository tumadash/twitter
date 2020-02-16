import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import {currentUser} from "./currentUser/reducers";
import {menu} from "./stateMenu/reducers";
import {users} from "./users/reducers";
import {newPostState} from "./newPostState/reducers";
import {news} from "./news/reducers";

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
};

const composedEnhancers = compose(
    applyMiddleware(thunk)
);

const listApp = combineReducers({
    currentUser,
    menu,
    users,
    newPostState,
    news
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
