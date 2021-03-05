import React, { useRef, useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import {AntDesign} from '@expo/vector-icons';

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
    const [currentGuess , setCurrentGuess] = useState(generateRandomBetween(1 , 100 , props.userChoice));
    const [ rounds , setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice , onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice , onGameOver])

    const nextGuessHandler = (direction) =>{
        if((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice) ){
            Alert.alert('Do not lie!', 'You know this is wrong...' , [{text : 'Sorry!' , style: 'cancel' }])
            return;
        }
        if(direction==='lower'){
            currentHigh.current = currentGuess; 
        }else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Card style={styles.summaryContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.theNumber}>{currentGuess}</Text>
                </View>
            </Card>
            <Card style={styles.buttonContainer}>
                <AntDesign name="minuscircleo" size={34} color="black" onPress={nextGuessHandler.bind(this, 'lower')} />
                <AntDesign name="pluscircleo" size={34} color="black" onPress={nextGuessHandler.bind(this, 'greater')} />
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
        fontSize:55,
    }

});

export default GameScreen;
