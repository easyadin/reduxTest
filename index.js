/**
 * @format
 */
import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';

const store = configureStore();

const TodoRedux = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => TodoRedux);
