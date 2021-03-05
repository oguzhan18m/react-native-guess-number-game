import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const GameOver = ({roundsNumber, userNumber,configureNewGameHandler}) => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
            <Image source={require('../assets/success.png')} />
            <Text>Number of Rounds : {roundsNumber}</Text>
            <Text>Number was : {userNumber}</Text>
            <Button title='RESTART GAME' onPress={configureNewGameHandler} />
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
