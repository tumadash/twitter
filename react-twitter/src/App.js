import React from 'react';
import './App.css';
//import {SignIn} from "./containers/SignIn";
import {HashRouter, Route} from "react-router-dom";
import Main from "./containers/Main"
import {persistor, store} from "./store/store";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';

export const App = () => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                {/*<Route exact path='/' component={SignIn}/>*/}
                <Route path='/' component={Main}/>
            </HashRouter>
        </PersistGate>
    </Provider>
};
