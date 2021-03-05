import React, { useRef, useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
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
    const initialGuess = generateRandomBetween(1 , 100 , props.userChoice);
    const [currentGuess , setCurrentGuess] = useState(initialGuess);
    const [ pastGuesses , setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice , onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(pastGuesses.length);
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
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber , ...curPastGuesses])
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
            <ScrollView>
                {pastGuesses.map((guess,index)=> 
                <View key={index} style={styles.list}>
                    <Text>{guess}</Text>
                </View>)}
            </ScrollView>
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
    },
    list:{
        borderColor:'#ccc',
        borderWidth:1,
        paddingHorizontal:100,
        paddingVertical:10,
        marginVertical:10,
        backgroundColor:'white',
        width:'100%',
    }

});

export default GameScreen;
