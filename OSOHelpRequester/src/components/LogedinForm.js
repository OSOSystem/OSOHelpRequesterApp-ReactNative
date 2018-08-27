import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LogedinForm extends Component {
    state = { signalSend: false };

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => this.sendSignal.bind(this)}>Send Signal</Button>
                </CardSection>
                <CardSection>
                    <Text>Signal send: </Text>
                    <Text value={this.state.signalSend}></Text>
                </CardSection>
                <CardSection>
                    <Text>Signal reached server: </Text>
                </CardSection>
                <CardSection>
                    <Text>Signal reached HP: </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </CardSection>                    
            </Card>
        );
    }

    sendSignal() {
        this.setState({ signalSend: true });
    };
}



export default LogedinForm;