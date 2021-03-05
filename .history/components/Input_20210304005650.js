import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Input = (props) => {
    return (
        <View style={{...styles.input , ...props.style }}>
            
        </View>
    )
};


const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10,
    }
});

export default Input;
