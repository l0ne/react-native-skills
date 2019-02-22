import React, {Fragment} from "react";
import {View, ImageBackground, Text, Image, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import {BackButton} from "../../components";
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return date.toLocaleDateString('en-Us', options);
    }

    render() {
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/home-image.png')} style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <View style={{width: '90%', flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', marginBottom: 20}}>
                           <TouchableOpacity><FeatherIcon name='menu' size={25} color='#fff' /></TouchableOpacity>
                           <TouchableOpacity><FeatherIcon name='search' size={25} color='#fff'/></TouchableOpacity>
                       </View>
                       <Text style={globalStyles.textH1}>Good Morning</Text>
                       <Image source={{uri: 'https://ru.gravatar.com/userimage/51517435/2dc1792e42e20efb43ad9edf3efef2b4.jpg?size=100'}} style={globalStyles.profileImage}/>
                       <Text style={[globalStyles.text, {fontSize: 15, marginTop: 20}]}>{this.formatDate(new Date())}</Text>
                       <View style={{flexDirection: 'row', marginTop: 40}}>
                           <View style={{width: 100, height: 100, borderRadius: 50, backgroundColor: '#6C56B7', alignItems: 'center', justifyContent: 'center'}}>
                               <Text style={[globalStyles.text, {fontSize: 66, fontWeight: '400'}]}>4</Text>
                           </View>
                           <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(140, 114, 227, 0.5)', alignItems: 'center', justifyContent: 'center', marginLeft: -30, marginTop: -10}}>
                               <Text style={globalStyles.text}>65%</Text>
                           </View>
                       </View>
                       <Text style={[globalStyles.text, {fontSize: 15, marginTop: 20}]}>You’ve already completed 4 </Text>
                       <Text style={[globalStyles.text, {fontSize: 15}]}><Text style={{fontWeight: '600'}}>Pay It Forward</Text> deeds today. </Text>
                       <Text style={[globalStyles.text, {fontSize: 15}]}>Nice work buddy!</Text>
                       <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30}}>
                           <Text style={[globalStyles.text, {fontSize: 13, marginBottom: 20}]}>View <Text style={{fontWeight: '600'}}>PIF</Text> deeds for today</Text>
                           <TouchableOpacity>
                               <AntDesignIcon name='circledowno' size={30} color='#fff'/>
                           </TouchableOpacity>
                       </View>
                   </LinearGradient>
               </ImageBackground>
           </Fragment>
       );
    }
}
