import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../styles";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export const Logo = () => {
    return (
        <View style={globalStyles.logo}>
            <EntypoIcon name="users" size={60} color="rgba(255, 255, 255, 0.6)" />
        </View>
    );
}

export const SignInButton = (props) => {
    const {text, action} = props;
    return (
        <TouchableOpacity style={[globalStyles.loginButton, {marginTop: 20}]} onPress={action}>
            <Text style={[globalStyles.text, {fontSize: 18}]}>{text}</Text>
        </TouchableOpacity>
    );
}

export const SignUpButton = (props) => {
    const {text, action} = props;
    return (
        <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
            <TouchableOpacity style={globalStyles.signupButton} onPress={action}>
                <Text style={[globalStyles.text, {fontSize: 15}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export const LoginInput = (props) => {
    const {placeholder, icon} = props;
    return (
        <View style={globalStyles.inputContainer}>
            <AntDesignIcon name={icon} size={25} color='#fff' />
            <TextInput placeholder={placeholder} placeholderTextColor='#fff' style={globalStyles.loginInput} />
        </View>
    );
}

export const BackButton = (props) => {
    return (
        <TouchableOpacity style={globalStyles.goBackButton} onPress={props.action}>
            <AntDesignIcon name="back" size={25} color='#fff' />
        </TouchableOpacity>
    );
}
