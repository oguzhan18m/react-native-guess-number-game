import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    },

});
export default GameOver;
