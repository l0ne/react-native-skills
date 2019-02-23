import React, {Fragment} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {MenuItem} from "..";
import {menuStyles} from "./style";

export class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    render() {
        return(
            <Fragment>
                <View style={menuStyles.navigation}>
                    <TouchableOpacity onPress={() => this.setState({isVisible: true})}>
                        <FeatherIcon name='menu' size={25} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FeatherIcon name='search' size={25} color='#fff'/>
                    </TouchableOpacity>
                </View>

                {this.state.isVisible &&
                <View style={menuStyles.container}>
                    <View style={menuStyles.overlay}>
                        <View style={{width: '90%'}}>
                            <TouchableOpacity onPress={() => this.setState({isVisible: false})} style={{marginBottom: 30}}>
                                <AntDesignIcon name='closecircleo' size={25} color='#DEDEDE'/>
                            </TouchableOpacity>
                            <MenuItem name='Home' icon='home'/>
                            <MenuItem name='Deeds for the Day' icon='rocket1'/>
                            <MenuItem name='Monthly Planner' icon='calendar'/>
                            <MenuItem name='Settings' icon='setting'/>
                        </View>
                    </View>
                </View>}
            </Fragment>
        );
    }
}
