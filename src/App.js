import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


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
