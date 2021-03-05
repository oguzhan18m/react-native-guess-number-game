import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

const GameOver = (props) => {
    return (
        <div>
            
        </div>
    )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:300,
        marginTop:20,
        maxWidth:'80%'
    },
    numberContainer:{
        borderWidth:5,
        borderColor: Colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    theNumber:{
        color:Colors.accent,
        fontSize:22,
    }

});
export default GameOver;
