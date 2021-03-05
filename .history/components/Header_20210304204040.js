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
        height:90,
        paddingTop:36,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
    },
    headerTitle:{
        color:'white',
        fontSize:18,
        fontFamily:'satisfy',
    }
});

export default Header;
