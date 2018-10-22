import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';
import HelpProviderList from './components/HelpProviderList';


const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.hpList()}
          rightTitle="HelpProvider"
          key="loggedin"
          component={LoggedinForm}
          title="Loggedin"
        />
        <Scene key="hpList" component={HelpProviderList} title="HelpProvider" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
