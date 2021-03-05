import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOver = ({roundsNumber, userNumber,configureNewGameHandler}) => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
            <Text>Number of Rounds : {roundsNumber}</Text>
            <Text>Number was : {userNumber}</Text>
            <Button title='RESTART GAME' onPress={} />
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
