import React, {Fragment} from "react";
import {View, ImageBackground, Text, Image, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import Moment from 'moment';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Menu from "../../components/menu";

export class PlannerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    render() {
       Moment.locale('en');
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/planner-image.png')} style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <Menu />
                       <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center'}}>
                           <EntypoIcon name='chevron-thin-left' size={30} color='#fff'/>
                           <Text style={globalStyles.textH1}>{Moment(new Date).format('MMMM, Y')}</Text>
                           <EntypoIcon name='chevron-thin-right' size={30} color='#fff'/>
                       </View>
                       <View style={{width: 200, height: 200, borderColor: '#fff', borderWidth: 6, borderRadius: 100, marginTop: 60, justifyContent: 'center', alignItems: 'center'}}>
                           <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                               <Text style={[globalStyles.text, {fontSize: 70, fontWeight: '400'}]}>25</Text>
                               <Text style={[globalStyles.text, {fontSize: 40, fontWeight: '400', marginTop: 5}]}>%</Text>
                           </View>
                           <Text style={globalStyles.text}>4 Deeds Complete</Text>
                       </View>
                       <Text style={[globalStyles.text, {marginTop: 40, fontSize: 15, fontWeight: '100', letterSpacing: 1.5}]}>You’re on course to reach your</Text>
                       <Text style={[globalStyles.text, {fontSize: 15, fontWeight: '100', letterSpacing: 1.5}]}>goal for this month.</Text>
                       <Text style={[globalStyles.text, {marginTop: 40, fontSize: 15, fontWeight: '400', letterSpacing: 1.5}]}>A big high-five for you!</Text>
                   </LinearGradient>
               </ImageBackground>
           </Fragment>
       );
    }
}
