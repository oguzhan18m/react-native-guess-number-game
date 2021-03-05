import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        paddingTop:36,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:120,
        borderBottomRightRadius:120,
    },
    headerTitle:{
        color:'white',
        fontSize:22,
        fontFamily:'Satisfy',
        marginBottom:10,
    }
});

export default Header;
