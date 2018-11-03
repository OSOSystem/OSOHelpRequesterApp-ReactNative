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

  handleOpenURL = (event) => {
    console.log('OSO-App -> Action reached: ', event);
    this.sendSignal();

    Alert.alert(
      'Flic Button Pressed',
      'We have send your signal',
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
          <Text>
            Signal send:
            {' '}
            { this.props.sended.toString() }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Signal reached server:
            {' '}
            { this.props.reachedServer.toString() }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Signal reached HP:
            {' '}
            { this.props.reachedHP.toString() }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Response-Status:
            {' '}
            { this.props.responseStatus.toString() }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            Error-Status:
            {' '}
            { this.props.error.toString() }
          </Text>
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
    url,
    loading,
    sended,
    reachedServer,
    reachedHP,
    error,
    responseStatus
  } = emergency;
  return {
    url,
    longitude,
    latitude,
    loading,
    reachedServer,
    reachedHP,
    sended,
    error,
    responseStatus
  };
};

export default connect(mapStateToProps, {
  longitudeChanged, latitudeChanged, sendEmergency
})(MainForm);
