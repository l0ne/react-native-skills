import React, {Fragment} from "react";
import {View, ImageBackground, Text} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {BackButton, LoginInput, SignInButton, SignUpButton} from "../../components";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/signup-image.png')} style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <BackButton action={() => this.props.navigation.goBack()} />
                       <Text style={globalStyles.textH1}>Sign Up</Text>
                       <View style={globalStyles.signUpLogo}>
                           <AntDesignIcon name="camerao" size={40} color='#fff' />
                       </View>
                       <LoginInput placeholder='Username' icon='user'/>
                       <LoginInput placeholder='Email' icon='mail'/>
                       <LoginInput placeholder='Password' icon='lock'/>
                       <LoginInput placeholder='Retype Password' icon='lock'/>
                       <SignInButton text='Sign Up'/>
                       <SignUpButton text='Already have an account? Sign In'
                                     action={() => this.props.navigation.navigate('SignIn')}/>
                   </LinearGradient>
               </ImageBackground>
           </Fragment>
       );
    }
}
