import React, {Fragment} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {menuStyles} from "./style";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MenuItem = (props) => {
    const {name, icon, action} = props;
    return (
        <TouchableOpacity style={menuStyles.menuItem} onPress={action}>
            <AntDesignIcon name={icon} size={25} color='#DEDEDE'/>
            <Text style={{fontSize: 18, fontWeight: '100', marginLeft: 20}}>{name}</Text>
        </TouchableOpacity>
    )
}

export const MenuBar = (props) => {
    const {action, style} = props;
    return (
        <View style={[menuStyles.navigation, style]}>
            <TouchableOpacity onPress={action}>
                <FeatherIcon name='menu' size={25} color='#fff' />
            </TouchableOpacity>
            <TouchableOpacity>
                <FeatherIcon name='search' size={25} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateTo(page) {
        this.props.close();
        this.props.navigation.navigate(page);
    }

    render() {
        const {close} = this.props;
        return(
            <View style={menuStyles.container}>
                <View style={menuStyles.overlay}>
                    <View style={{width: '90%'}}>
                        <TouchableOpacity onPress={close} style={{marginBottom: 30}}>
                            <AntDesignIcon name='closecircleo' size={25} color='#DEDEDE'/>
                        </TouchableOpacity>
                        <MenuItem name='Home' icon='home' action={() => this.navigateTo('Home')}/>
                        <MenuItem name='Deeds for the Day' icon='rocket1' action={() => this.navigateTo('Deeds')}/>
                        <MenuItem name='Monthly Planner' icon='calendar' action={() => this.navigateTo('Planner')}/>
                        <MenuItem name='Settings' icon='setting' action={() => this.navigateTo('Settings')}/>
                        <MenuItem name='Logout' icon='logout' action={() => this.navigateTo('SignIn')}/>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 100}}>
                        <FontAwesome name='pied-piper-alt' size={60} color="#8C72E3" />
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Menu);
