import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Colors from '../constants/Colors';

const generateRandomBetween = (min, max, exclude) =>{
    min= Math.ceil(min);
    max = Math.floor(max);
    const rndmNum = Math.floor(Math.random()* (max-min) ) + min;
    if(rndmNum === exclude ){
        return generateRandomBetween(min , max, exclude)
    }else {
        return rndmNum;
    }
} 

const GameScreen = (props) => {
    const [currentGuess , setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Card style={styles.summaryContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.theNumber}>{selectedNumber}</Text>
                </View>
            </Card>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER'/>
                <Button title='GREATER'/>
            </Card>
        </View>
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

export default GameScreen;
