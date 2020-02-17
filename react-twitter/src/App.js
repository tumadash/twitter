import React from 'react';
import './App.css';
//import {SignIn} from "./containers/SignIn";
import {HashRouter, Route} from "react-router-dom";
import Main from "./containers/Main"
import {persistor, store} from "./store/store";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Redirect from "react-router-dom/es/Redirect";

export const App = () => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <Route exact path='/' component={SignIn}/>
                <Route exact path='/registration' component={SignUp}/>
                <Route path='/main' component={Main}/>
                {/*<Route path='/main' component={Main}>{store.currentUser ? <Main/> : <Redirect to="/"/>}</Route>*/}
            </HashRouter>
        </PersistGate>
    </Provider>
};
