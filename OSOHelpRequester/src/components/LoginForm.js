import React, { Component } from 'react';
import { Text, Alert } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Login from '../keycloak/index';

const defaultConfig = {
    url: 'https://app.ososystem.de/auth',
    realm: 'osorealm',
    clientId: 'login-app',
    clientSecret: 'e5f1cf4f-c5d8-4989-ba46-0a8a50ec557e'
  };

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    async onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        
        const config = { 
            url: defaultConfig.url, 
            realm: defaultConfig.realm, 
            username: email,
            password: password,
            clientId: defaultConfig.clientId,
            clientSecret: defaultConfig.clientSecret 
        };
        config.password = password;

        await Login.startLoginProcess(config).then(tokens => {
            if(JSON.stringify(tokens).includes("access_token")) {
                Login.saveTokens(tokens);
                Alert.alert("Logged-In");
                onLoginSuccess();
            } 
            else {
                Alert.alert("Error"); 
                onLoginFailed();
            }
        }); 
    }

    onLoginSuccess() {
        console.log("Login Success");

        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFailed() {
        console.log("Login Failed");
        
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="E-Mail:"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password:"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;