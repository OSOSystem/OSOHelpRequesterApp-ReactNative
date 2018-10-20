import React, { Component } from 'react';
import { View, Alert, Linking } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';

import Login from './keycloak/index';
import { TokenStorage } from './keycloak/TokenStorage';

import Router from './Router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


type Props = {};
export default class App extends Component<Props> {
    state = { loggedIn: false };

    async componentWillMount() {  
        const gatheredTokens = await Login.getTokens();
        Login.refreshToken();

        if(JSON.stringify(gatheredTokens).includes("access_token")) {
            this.setState({ loggedIn: true });
        } 

        chooseComponent();
    } 
    

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return <LoggedinForm />;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }        
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Router />
            </Provider>
        );
    }
}