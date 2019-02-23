import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../styles";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Logo = () => {
    return (
        <View style={globalStyles.logo}>
            <FontAwesome name='pied-piper-alt' size={65} color="rgba(255, 255, 255, 0.6)" />
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
            <AntDesignIcon name="leftcircleo" size={25} color='#fff' />
        </TouchableOpacity>
    );
}

export const MenuItem = (props) => {
    const {name, icon} = props;
    return (
        <TouchableOpacity style={{flexDirection: 'row', borderBottomColor: '#D8D8D8', borderBottomWidth: 1, marginTop: 15, alignItems: 'center', paddingBottom: 10}}>
            <AntDesignIcon name={icon} size={25} color='#DEDEDE'/>
            <Text style={{fontSize: 18, fontWeight: '100', marginLeft: 20}}>{name}</Text>
        </TouchableOpacity>
    )
}