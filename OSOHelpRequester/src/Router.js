import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LoggedinForm from './components/LoggedinForm';
import App from './App';
import HelpProviderList from './components/HelpProviderList';
import { Actions } from 'react-native-router-flux';


const RouterComponent = () => {
    return (
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
};

export default RouterComponent;