import React, {Fragment} from "react";
import {View, ImageBackground, Text} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {BackButton} from "../../components";
import FeatherIcon from 'react-native-vector-icons/Feather';

export class WalkthtoughScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/walk-image.png')} style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <BackButton action={() => this.props.navigation.goBack()} />
                       <Text style={globalStyles.textH1}>Walkthtough</Text>
                       <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: 50}}>
                           <View style={{width: 20, height: 350, backgroundColor: '#6C56B7', opacity: 0.4}} />
                           <View style={{width: '75%', height: 400, backgroundColor: '#6C56B7', alignItems: 'center', borderRadius: 4}}>
                               <FeatherIcon name='tablet' size={180} color='#fff' style={{marginTop: 80, marginBottom: 50}}/>
                               <Text style={[globalStyles.text, {fontSize: 15}]}>Easily navigate through your</Text>
                               <Text style={[globalStyles.text, {fontSize: 15}]}>daily Pay It Forward deeds</Text>
                           </View>
                           <View style={{width: 20, height: 350, backgroundColor: '#6C56B7', opacity: 0.4}} />
                       </View>
                       <View style={{flexDirection: 'row', marginTop: 20}}>
                           <View style={globalStyles.stepper}/>
                           <View style={[globalStyles.stepper, {backgroundColor: '#6C56B7', borderColor: '#6C56B7'}]}/>
                           <View style={globalStyles.stepper}/>
                       </View>
                   </LinearGradient>
               </ImageBackground>
           </Fragment>
       );
    }
}
