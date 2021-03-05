import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Card = () => {
    return (
        <View>
            
        </View>
    )
}



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
        paddingHorizontal:'15',
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
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
