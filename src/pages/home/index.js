import React, {Fragment} from "react";
import {View, ImageBackground, Text, Image, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import Moment from 'moment';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Menu from "../../components/menu";

const RatingCircles = () => {
    return (
        <View style={{flexDirection: 'row', marginTop: 40}}>
            <View style={{width: 100, height: 100, borderRadius: 50, backgroundColor: '#6C56B7', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[globalStyles.text, {fontSize: 66, fontWeight: '400'}]}>4</Text>
            </View>
            <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(140, 114, 227, 0.5)', alignItems: 'center', justifyContent: 'center', marginLeft: -30, marginTop: -10}}>
                <Text style={globalStyles.text}>65%</Text>
            </View>
        </View>
    );
}

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
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
       Moment.locale('en');
       return(
           <Fragment>
               <ImageBackground source={require('../../../assets/img/home-image.png')} style={globalStyles.backgroundImage}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <Menu />
                       <Text style={globalStyles.textH1}>Good Morning</Text>
                       <Image source={{uri: 'https://ru.gravatar.com/userimage/51517435/eb4e608c4289a05b15f1d2e4a1d6197e.jpg?size=100'}} style={globalStyles.profileImage}/>
                       <Text style={[globalStyles.text, {fontSize: 15, marginTop: 20, letterSpacing: 1.5}]}>{Moment(new Date).format('dddd, MMMM d, Y')}</Text>
                       <RatingCircles/>
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

const MenuItem = (props) => {
    const {name, icon} = props;
    return (
        <TouchableOpacity style={{flexDirection: 'row', borderBottomColor: '#D8D8D8', borderBottomWidth: 1, marginTop: 15, alignItems: 'center', paddingBottom: 10}}>
            <AntDesignIcon name={icon} size={25} color='#DEDEDE'/>
            <Text style={{fontSize: 18, fontWeight: '100', marginLeft: 20}}>{name}</Text>
        </TouchableOpacity>
    )
}
