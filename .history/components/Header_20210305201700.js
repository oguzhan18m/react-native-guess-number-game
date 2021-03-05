import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/Colors';

const Header = (props) => {
    return (
        <View style={{...styles.headerBase , ...Platform.select({
            ios: styles.headerIos,
            android: styles.headerAndroid,
        })}}>
            <Text style={styles.headerTitle}>{props.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height:80,
        paddingTop:36,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'black',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:150,
        borderBottomRightRadius:150,
    },
    headerIos:{
        backgroundColor: 'black',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    headerAndroid:{
        backgroundColor: Colors.primary,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    },
    headerTitle:{
        color:'white',
        fontSize:25,
        fontFamily:'Satisfy',
        marginBottom:10,
    }
});

export default Header;
