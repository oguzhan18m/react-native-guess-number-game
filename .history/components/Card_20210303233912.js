import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            
        </View>
    )
}



const styles = StyleSheet.create({
    card:{
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        elevation:5,
        padding:20,
        borderRadius:20,
    }
});
export default Card;
