import React, {Fragment, Component} from "react";
import {View, ImageBackground, Text, Image, ActivityIndicator, Modal} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import Moment from 'moment';
import Menu from "../../components/menu";
import {LoginInput, SignUpButton} from "../../components";
import {connect} from 'react-redux';
import {getSettings} from "../../actions/SettingsActions";
import {LoadingView} from "../../components/loading";

class SettingsScreen extends Component {
    state = {
        user: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSettings()
    }

    render() {
       const {user, isLoading} = this.props.settings
       Moment.locale('en');
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/settings.png')} style={[globalStyles.backgroundImage, {height: 350}]}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <Menu />
                       <Text style={globalStyles.textH1}>Settings</Text>
                       <Image source={{uri: 'https://ru.gravatar.com/userimage/51517435/eb4e608c4289a05b15f1d2e4a1d6197e.jpg?size=100'}} style={globalStyles.profileImage}/>
                   </LinearGradient>
               </ImageBackground>
               <View style={{width: '100%', alignItems: 'center'}}>
                   <LoginInput placeholder='Username' icon='user' color={true} value={user.name} />
                   <LoginInput placeholder='Email' icon='envelope' color={true} value={user.email}/>
                   <LoginInput placeholder='Password' icon='lock' color={true} />
                   <LoginInput placeholder='Birthday' icon='gift' color={true} />
               </View>
               {isLoading && <LoadingView overlay/>}
               <SignUpButton text='Save' />
           </Fragment>
       );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSettings: () => dispatch(getSettings())
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
