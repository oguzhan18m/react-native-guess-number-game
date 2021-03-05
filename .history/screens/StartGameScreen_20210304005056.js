import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title='Reset' onPress={()=>{}} color={Colors.accent} />
                    <Button title='Confirm' onPress={()=>{}} color={Colors.primary} />
                </View>
            </Card>
        </View>
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
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    }
});

export default StartGameScreen;
