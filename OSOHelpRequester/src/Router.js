import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';
import App from './App';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />          
                <Scene key="loggedin" component={LoggedinForm} title="Loggedin" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;