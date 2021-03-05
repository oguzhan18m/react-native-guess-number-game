import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title='Reset' onPress={()=>{}} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                    <Button title='Confirm' onPress={()=>{}} color={Colors.primary} />
                    </View>
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
    },
    button: {
        width:100,
    }

});

export default StartGameScreen;
