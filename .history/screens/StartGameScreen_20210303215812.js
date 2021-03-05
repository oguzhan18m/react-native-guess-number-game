import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Start Game Screen</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title='Reset' onPress={()=>{}} />
                    <Button title='Confirm' onPress={()=>{}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        padding:10,
        alignItems:'center',

    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'space-between',
    }
});

export default StartGameScreen;
