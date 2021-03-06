import React from 'react';
import { Button, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/Colors';

const GameOver = ({roundsNumber, userNumber,configureNewGameHandler}) => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text style={styles.gameOverText}>Game is Over!</Text>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' />
            </View>
            <Text style={styles.numOfRounds}>Number of Rounds : {roundsNumber}</Text>
            <Text style={styles.numWas}>Number was : {userNumber}</Text>
            <View style={styles.restartBtn}>
            <Button title='RESTART GAME' onPress={configureNewGameHandler} color={Colors.accent} />
            </View>
        </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
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
        paddingHorizontal:30,
        textAlign:'center',
        marginVertical:Dimensions.get('window').height /80,
        color: 'white',
        backgroundColor:'green',
    },
    numWas:{
        fontSize:15,
        fontWeight:'bold',
        borderWidth:2,
        borderRadius:30,
        paddingVertical:5,
        paddingHorizontal:30,
        textAlign:'center',
        marginVertical:Dimensions.get('window').height /80,
        color: 'black',
        backgroundColor:'yellow',
    },
    restartBtn:{
        width:'100%',
    },
    imageContainer:{
        width:Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius:Dimensions.get('window').width * 0.7 / 2,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height /60 ,
    },
    image:{
        width:'100%',
        height:'100%',
    }

});
export default GameOver;
