import React, { Component } from 'react';
import { Text, DeviceEventEmitter } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button, Card, CardSection, Input, Spinner } from './common';
import GeolocationOSO from '../Functions/Geolocation';
import { sendEmergency } from '../Functions/EmergencySend';

class LoggedinForm extends Component {
    state = { signalSend: false, longitude: 0.000000, latitude: 0.000000 };

    componentWillMount() {
        GeolocationOSO.refreshGeolocation();
        
        // For Android: Emitted in native Code -> FlicLib/.../reactlibrary/BroadcastReceiver.java
        DeviceEventEmitter.addListener('flicButtonPressed', function(Event) {
          sendSignal();
        });
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
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </CardSection>                    
            </Card>
        );
    }
}



export default LoggedinForm;