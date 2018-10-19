import React, { Component } from 'react';
import { Text, DeviceEventEmitter, Linking, Alert } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import GeolocationOSO from '../Functions/Geolocation';
import { sendEmergency } from '../Functions/EmergencySend';

type Props = {};
export default class LoggedinForm extends Component<Props> {
    state = { signalSend: false, longitude: 0.000000, latitude: 0.000000 };

    componentDidMount() {
        // Used for our intent handling (atm. just for flic-button)
        Linking.addEventListener('url', this.handleOpenURL);

        GeolocationOSO.refreshGeolocation();
      }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL(event) {
        //console.log("OSO-App -> Action reached: " + event.url);
        //this.sendSignal();
        Alert.alert(
            'Flic Button Pressed',
            'Aloha my friend',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    sendSignal() {
        this.setState({ signalSend: true });
        console.log("Signal send clicked");
        console.log("state.signalSend = " + this.state.signalSend);

        GeolocationOSO.refreshGeolocation();
        console.log("started refreshing geolocation");

        var geodata = GeolocationOSO.getGeodata();
        this.setState({ longitude: geodata.longitude, latitude: geodata.latitude });
        sendEmergency(geodata.latitude, geodata.longitude);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.sendSignal.bind(this)}>
                        Send Signal
                    </Button>
                </CardSection>
                <CardSection>
                    <Text>Signal send:</Text>
                    <Text>{this.state.signalSend.toString()}</Text>
                </CardSection>
                <CardSection>
                    <Text>Signal reached server: </Text>
                </CardSection>
                <CardSection>
                    <Text>Signal reached HP: </Text>
                </CardSection>
                <CardSection>
                    <Text>Latitude: { this.state.latitude.toString() }</Text>                 
                </CardSection>
                <CardSection>
                    <Text>Longitude: { this.state.longitude.toString() }</Text> 
                </CardSection>
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>                    
            </Card>
        );
    }
}