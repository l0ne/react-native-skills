import React, {Fragment, Component} from "react";
import {ImageBackground, Text, AsyncStorage} from "react-native";
import {LinearGradient} from 'expo';
import {globalStyles} from "../../styles";
import {Logo, SignInButton, SignUpButton} from "../../components";
import {getItem} from "../../utils/StorageService";

export class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await getItem('userToken');
        this.props.navigation.navigate(userToken && 'App');
    };

    render() {
        return (
            <Fragment>
                <ImageBackground source={require('../../../assets/img/welcome-image.png')}
                                 style={globalStyles.backgroundImage}>
                    <LinearGradient start={[0, 0]} end={[1, 1]}
                                    colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                    style={globalStyles.backgroundGradient}>
                        <Logo/>
                        <Text style={globalStyles.textH1}>Welcome!</Text>
                        <Text style={[globalStyles.text, {marginTop: 5}]}>Let’s make someone’s day</Text>
                        <SignInButton text='Sign In' action={() => this.props.navigation.navigate('SignIn')}/>
                        <SignUpButton text='Don’t have an account? Sign Up'
                                      action={() => this.props.navigation.navigate('SignUp')}/>
                    </LinearGradient>
                </ImageBackground>
            </Fragment>
        );
    }
}
