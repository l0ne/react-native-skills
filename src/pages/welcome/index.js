import React, {Fragment} from "react";
import {ImageBackground, Text} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {Logo, SignInButton, SignUpButton} from "../../components";

export const WelcomeScreen = (props) => {
   return(
       <Fragment>
           <ImageBackground source={require('../../../assets/img/welcome-image.png')}
                            style={globalStyles.backgroundImage}>
               <LinearGradient start={[0, 0]} end={[1, 1]}
                               colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                               style={globalStyles.backgroundGradient}>
                   <Logo />
                   <Text style={globalStyles.textH1}>Welcome!</Text>
                   <Text style={[globalStyles.text, {marginTop: 5}]}>Let’s make someone’s day</Text>
                   <SignInButton text='Sign In' action={() => props.navigation.navigate('SignIn')}/>
                   <SignUpButton text='Don’t have an account? Sign Up' action={() => props.navigation.navigate('SignUp')}/>
               </LinearGradient>
           </ImageBackground>
       </Fragment>
   );
}
