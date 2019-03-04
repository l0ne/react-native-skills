import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    backgroundImage: {width: '100%', height: '100%'},
    backgroundGradient: {width: '100%', height: '100%', alignItems: 'center'},
    logo: {width: 130, height: 130, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 65, alignItems: 'center', justifyContent: 'center', marginTop: 120, marginBottom: 100},
    textH1: {fontSize: 32, color: '#fff', fontWeight: '100', letterSpacing: 1.5},
    text: {fontSize: 12, color: '#fff', fontWeight: '100'},
    textGrey: {fontSize: 24, color: '#303030', fontWeight: '100', letterSpacing: 2.5},
    loginButton: {width: '70%', height: 50, backgroundColor: '#6C56B7', borderRadius: 25, alignItems: 'center', justifyContent: 'center'},
    signupButton: {width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(140, 114, 227, 0.7)'},
    loginInput: {width: '80%', height: 25, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1, marginLeft: 10},
    inputContainer: {flexDirection: 'row', marginTop: 20},
    goBackButton: {width: '90%', alignItems: 'flex-start', marginTop: 40},
    signUpLogo: {width: 100, height: 100, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 40},
    stepper: {width: 10, height: 10, borderColor: '#fff', borderRadius: 5, borderWidth: 1, margin: 5},
    profileImage: {width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff', marginTop: 20},
    circle60: {width: 60, height: 60, borderRadius: 30, backgroundColor: '#6C56B7', alignItems: 'center', justifyContent: 'center', marginTop: 30},
    circle100: {width: 100, height: 100, borderRadius: 50, backgroundColor: '#8C72E3', alignItems: 'center', justifyContent: 'center', marginTop: 30}
});
