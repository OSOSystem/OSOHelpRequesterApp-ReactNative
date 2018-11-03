import React, { Component } from 'react';
import {
  Text, Linking, Alert
} from 'react-native';
import { connect } from 'react-redux';
import {
  Button, Card, CardSection, Spinner
} from './common';
import GeolocationOSO from '../utilities/Geolocation';
import {
  longitudeChanged, latitudeChanged, sendEmergency,
  emergencyReachedHP, emergencyReachedServer, emergencyFailed
} from '../actions';

class MainForm extends Component {
  componentDidMount() {
    // Used for our intent handling (atm. just for flic-button)
    Linking.addEventListener('url', this.handleOpenURL);

    this.refreshGeolocation();
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  refreshGeolocation = () => {
    console.log('Start Refresh Geolocation');
    GeolocationOSO.refreshGeolocation();
    const geodata = GeolocationOSO.getGeodata();
    console.log('Finished Refresh Geolocation');

    this.props.longitudeChanged(geodata.longitude);
    this.props.latitudeChanged(geodata.latitude);
  }


  sendSignal = () => {
    console.log('Signal Send Clicked');
    this.refreshGeolocation();

    this.props.sendEmergency(
      this.props.url,
      this.props.latitude,
      this.props.longitude
    );
  }

  logout = () => {
    this.Login.logoutKc();
    this.Actions.auth();
  }

  handleOpenURL(event) {
    console.log(`OSO-App -> Action reached: ${event.url}`);
    this.sendSignal();

    Alert.alert(
      'Flic Button Pressed',
      'Aloha my friend',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  renderSendButton() {
    console.log('loading: ', this.loading);
    if (this.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.sendSignal}>
				Send Signal
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          {this.renderSendButton()}
        </CardSection>
        <CardSection>
          <Button onPress={this.refreshGeolocation}>
                        Refresh Location (manuell)
          </Button>
        </CardSection>
        <CardSection>
          <Text>Signal send: </Text>
          <Text>{this.props.sended}</Text>
        </CardSection>
        <CardSection>
          <Text>Signal reached server: </Text>
          <Text>{this.props.reachedServer}</Text>
        </CardSection>
        <CardSection>
          <Text>Signal reached HP: </Text>
          <Text>{this.props.HP}</Text>
        </CardSection>
        <CardSection>
          <Text>
            Latitude:
            {' '}
            { this.props.latitude }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Longitude:
            {' '}
            { this.props.longitude }
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.logout}>
            Log Out
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ emergency, geolocation }) => {
  const { longitude, latitude } = geolocation;
  const {
    url, loading, sended, reachedServer, reachedHP
  } = emergency;
  return {
    url, longitude, latitude, loading, reachedServer, reachedHP
  };
};

export default connect(mapStateToProps, {
  longitudeChanged, latitudeChanged, sendEmergency
})(MainForm);
