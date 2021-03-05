import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert, Dimensions,ScrollView, KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';


const StartGameScreen = (props) => {
    const [ enteredValue, setEnteredValue] = useState('');
    const [ confirmed, setConfirmed] = useState(false);
    const [ selectedNumber, setSelectedNumber] = useState();



    const numberInputHandler = (inputText) =>{
        setEnteredValue(inputText);
    }

    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert('Invalid Number!' , 'Number has to be between 1 and 99.' ,[{text:'Okay', style:'destructive', onPress:resetInputHandler}]);
            return ;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.theNumber}>{selectedNumber}</Text>
                </View>
                <Button title='START GAME' onPress={()=> props.onStartGame(selectedNumber)} />
            </Card>
        )
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input  style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType='number-pad' 
                maxLength={2} 
                onChangeText={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title='Reset' onPress={resetInputHandler} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                    <Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary} />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
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
        paddingHorizontal:15,
    },
    inputContainer:{
        width:'80%',
        minWidth:300,
        alignItems:'center',
    },
    button: {
        // width:90,
        width: Dimensions.get('window').width / 3,
    },
    input:{
        width:70,
        textAlign:'center',
        marginBottom:30,
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
        width:'60%',
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

export default StartGameScreen;
