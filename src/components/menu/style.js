import { StyleSheet } from "react-native";

export const menuStyles = StyleSheet.create({
    navigation: {width: '90%', flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', marginBottom: 20},
    container: {width: '100%', height: '100%', backgroundColor: 'rgba(48, 48, 48, 0.8)', position: 'absolute', left: 0, top: 0, zIndex: 1},
    overlay: {width: '85%', height: '100%', backgroundColor: '#fff', paddingTop: 40, alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 4, height: 2}, shadowBlur: 15, shadowOpacity: 0.4}
});
