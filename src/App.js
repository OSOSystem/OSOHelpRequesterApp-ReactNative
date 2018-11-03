import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { PermissionsAndroid } from 'react-native';

async function requestLocatingPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'OSO-System Locating Access',
        'message': 'OSO-System needs access to your GPS-Locating ' +
                   'so the system can help you.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the locating-system")
    } else {
      console.log("Locating permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

class App extends Component {
  constructor() {
    super();
    requestLocatingPermission();
  }

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
