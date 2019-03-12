import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingView = ({ overlay = false }) => {
    const backgroundColor = (overlay) ? 'rgba(0, 0, 0, 0.5)' : 'transparent';
    const { containerStyle } = styles;

    return (
        <View style={[{backgroundColor}, containerStyle]}>
            <ActivityIndicator size="large" color='#99195E' />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
});

export { LoadingView };
