import React, { Component } from 'react';
import { View, Alert, Linking } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';
import HelpProviderList from './components/HelpProviderList';

import Login from './keycloak/index';
import { TokenStorage } from './keycloak/TokenStorage';

import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    render() {
        const createdStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={createdStore}>
                <Router />
            </Provider>
        );
    }
}

export default App;