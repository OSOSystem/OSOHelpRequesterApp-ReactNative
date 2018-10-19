import React, { Component } from 'react';
import { View, Alert, Linking } from 'react-native';
//import firebase from '@firebase/app';
//import '@firebase/auth';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';

type Props = {};
export default class App extends Component<Props> {
    //state = { loggedIn: null };
    state = { loggedIn: true };

    componentWillMount() {  
        /*      
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCs3yPAeeP8vhV1xvEr1MTVqjwX_3owoV0",
                authDomain: "ososystem-5f531.firebaseapp.com",
                databaseURL: "https://ososystem-5f531.firebaseio.com",
                projectId: "ososystem-5f531",
                storageBucket: "",
                messagingSenderId: "869224602162"
            });
        }
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });*/
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
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}