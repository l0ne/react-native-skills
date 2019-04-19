import React, {Fragment} from "react";
import {ImageBackground, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {LoginInput, Logo, SignInButton, SignUpButton} from "../../components";
import {doLogin} from "../../actions/LoginActions";
import {connect} from "react-redux";
import {LoadingView} from "../../components/loading";
import {ErrorMessage} from "../../components/notification";
import {removeItem} from "../../utils/StorageService";
import {EMAIL_PATTERN, PASSWORD_PATTERN} from "../../constants";

const ForgotPassword = () => {
    return (
        <TouchableOpacity style={{width: '90%', alignItems: 'flex-end', marginBottom: 20}}>
            <Text style={[globalStyles.text, {fontWeight: '500'}]}>Forgot password?</Text>
        </TouchableOpacity>
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

    componentDidMount() {
        removeItem('userToken');
    }

    login() {
        const {email, password} = this.state;
        this.props.doLogin(email, password);
    }

    _isFormValid() {
        const {email, password} = this.state;
        return (email.trim() && EMAIL_PATTERN.test(email) && password.trim() && PASSWORD_PATTERN.test(password));
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
                       <LoginInput placeholder='Email' icon='envelope'
                                   action={(email) => this.setState({email})} value={this.state.email}/>
                       <LoginInput placeholder='Password' icon='lock' password={true}
                                   action={(password) => this.setState({password})} value={this.state.password}/>
                       <ForgotPassword/>
                       <SignInButton text='Sign In' action={() => this.login()} disabled={!this._isFormValid()}/>
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
