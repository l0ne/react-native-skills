import React, {Fragment} from "react";
import {ImageBackground, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {LoginInput, Logo, SignInButton, SignUpButton} from "../../components";

const ForgotPassword = () => {
    return (
        <TouchableOpacity style={{width: '90%', alignItems: 'flex-end', marginBottom: 20}}>
            <Text style={[globalStyles.text, {fontWeight: '500'}]}>Forgot password?</Text>
        </TouchableOpacity>
    )
}

export class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/signin-image.png')}
                                style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]}
                                   colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <Logo />
                       <LoginInput placeholder='Username' icon='user'/>
                       <LoginInput placeholder='Password' icon='lock'/>
                       <ForgotPassword/>
                       <SignInButton text='Sign In' action={() => this.props.navigation.navigate('Home')}/>
                       <SignUpButton text='Don’t have an account? Sign Up' action={() => this.props.navigation.navigate('SignUp')}/>
                   </LinearGradient>
               </ImageBackground>
           </Fragment>
       );
    }
}
