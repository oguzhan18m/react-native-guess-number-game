import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View>
            
        </View>
    )
};


const styles = StyleSheet.create({
    screen : {
        flex:1,
        padding:10,
        alignItems:'center',

    },
    title:{
        fontSize:20,
        marginVertical:10,

    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:15,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    }
});

export default Input;
