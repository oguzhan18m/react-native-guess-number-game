import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const GameOver = ({roundsNumber, userNumber,configureNewGameHandler}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.gameOverText}>Game is Over!</Text>
            <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' />
            <Text style={styles.numOfRounds}>Number of Rounds : {roundsNumber}</Text>
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
    gameOverText:{
        fontSize:20,
        fontWeight:'bold',
        borderWidth:2,
        borderRadius:30,
        paddingVertical:5,
        paddingHorizontal:50,
        textAlign:'center',
        marginBottom:10,
        color: 'white',
        backgroundColor:'purple',
    },
    numOfRounds:{
        fontSize:15,
        fontWeight:'bold',
        borderWidth:2,
        borderRadius:30,
        paddingVertical:5,
        paddingHorizontal:50,
        textAlign:'center',
        marginVertical:10,
        color: 'white',
        backgroundColor:'green',
    },
    image:{
        width:'90%',
        height:300,
        borderRadius:10,
    }

});
export default GameOver;
