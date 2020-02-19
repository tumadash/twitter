/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Main} from './src/screens/Main';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "./src/store/store";

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Main/>
            </PersistGate>
        </Provider>
    );
};
