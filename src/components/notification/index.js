import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../styles";
import React from "react";

export const ErrorMessage = (props) => {
    const {message, position} = props;
    return (
        <View style={[styles.container, position && {top: position}]}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={[globalStyles.text, {fontSize: 14, fontWeight: '100'}]}> ¯\_(ツ)_/¯ {message}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {position: 'absolute', top: 40, width: '100%', zIndex: 1, alignItems: 'center'},
    touchable: {borderRadius: 5, borderColor: '#D0021B', backgroundColor: 'rgba(208, 2, 37, 0.3)', borderWidth: 1, width: '90%', minHeight: 50, alignItems: 'center', justifyContent: 'center'}
});
