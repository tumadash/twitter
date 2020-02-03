import React from 'react';
import './App.css';
import {SignIn} from "./containers/SignIn";
import {HashRouter, Route} from "react-router-dom";
import {Main} from "./containers/Main"

export const App = () => {
    return <HashRouter>
        {/*<Route exact path='/' component={SignIn}/>*/}
        <Route path='/' component={Main}/>
    </HashRouter>
};
