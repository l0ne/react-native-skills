import React, {Fragment} from "react";
import {View, ImageBackground, Text, Image, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo';
import {globalStyles} from "../../styles";
import Moment from 'moment';
import Menu, {MenuBar} from "../../components/menu";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


export class DeedsScreen extends React.Component {

    state = {
        menu: false
    }

    constructor(props) {
        super(props);
    }

    render() {
       Moment.locale('en');
       return(
           <Fragment>
               {this.state.menu && <Menu close={() => this.setState({menu: false})} />}
               <ImageBackground source={require('../../../assets/img/deeds.png')} style={[globalStyles.backgroundImage, {height: 350}]}>
                   <LinearGradient start={[0, 0]} end={[1, 1]} colors={['rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)']}
                                   style={globalStyles.backgroundGradient}>
                       <MenuBar action={() => this.setState({menu: true})} />
                       <Text style={globalStyles.textH1}>1st Deed of the day</Text>
                       <View style={globalStyles.circle100}>
                            <AntDesignIcon name='rest' color='#fff' size={57}/>
                       </View>
                       <Text style={[globalStyles.text, {fontSize: 20, marginTop: 30}]}>At 10: 27am</Text>
                   </LinearGradient>
               </ImageBackground>
               <View style={{width: '100%', alignItems: 'center'}}>
                   <Text style={[globalStyles.textGrey, {marginTop: 50}]}>Paid an old lady’s</Text>
                   <Text style={globalStyles.textGrey}>grocery bill at the local</Text>
                   <Text style={globalStyles.textGrey}>convenience store.</Text>
                   <Text style={globalStyles.textGrey}>Felt real good about it!</Text>
                   <TouchableOpacity style={globalStyles.circle60}>
                       <AntDesignIcon name='plus' color='#fff' size={30}/>
                   </TouchableOpacity>
               </View>
           </Fragment>
       );
    }
}
