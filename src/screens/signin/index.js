import React, {Fragment} from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {LoginInput, Logo, SignInButton, SignUpButton} from "../../components";
import {doLogin} from "../../actions/LoginActions";
import {connect} from "react-redux";
import {LoadingView} from "../../components/loading";

const ForgotPassword = () => {
    return (
        <TouchableOpacity style={{width: '90%', alignItems: 'flex-end', marginBottom: 20}}>
            <Text style={[globalStyles.text, {fontWeight: '500'}]}>Forgot password?</Text>
        </TouchableOpacity>
    )
}

const ErrorMessage = (props) => {
    const {message} = props;
    return (
        <View style={{position: 'absolute', top: 40, width: '100%', zIndex: 2, alignItems: 'center'}}>
            <TouchableOpacity style={{borderRadius: 5, borderColor: '#D0021B', backgroundColor: 'rgba(208, 2, 37, 0.3)', borderWidth: 1, width: '90%', minHeight: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[globalStyles.text, {fontSize: 14, fontWeight: '100'}]}>{message}</Text>
            </TouchableOpacity>
        </View>

    )
}

class SignInScreen extends React.Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props);
    }

    login() {
        const {email, password} = this.state;
        this.props.doLogin(email, password);
    }

    render() {
       const {isLoading, error} = this.props.login;
       return(
           <Fragment>
               {!!error && <ErrorMessage message={error}/>}
               <ImageBackground source={require('../../../assets/img/signin-image.png')}
                                style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]}
                                   colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <Logo />
                       <LoginInput placeholder='Username' icon='user' action={(text) => this.setState({email: text})} value={this.state.email}/>
                       <LoginInput placeholder='Password' icon='lock' action={(text) => this.setState({password: text})} value={this.state.password}/>
                       <ForgotPassword/>
                       <SignInButton text='Sign In' action={() => this.login()} />
                       <SignUpButton text='Don’t have an account? Sign Up' action={() => this.props.navigation.navigate('SignUp')}/>
                   </LinearGradient>
               </ImageBackground>
               {isLoading && <LoadingView/>}
           </Fragment>
       );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (email, password) => dispatch(doLogin(email, password))
    }
}

const mapStateToProps = (state) => ({
    login: state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
