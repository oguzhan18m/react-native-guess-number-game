import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import {AppLoading} from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  const [loaded] = useFonts({
    Satisfy: require('./assets/fonts/Satisfy-Regular.ttf'),
  });

  if(!loaded){
    return (
      <AppLoading startAsync={loaded}  onError={(err)=>console.log(err)} />
    )
  }


  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  
  const startGameHandler = (selectedNum) =>{
    setUserNumber(selectedNum);
  }

    const gameOverHandler = (numOfRounds) =>{
      setGuessRounds(numOfRounds);
  }
  
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  
  console.log(userNumber);

  if(userNumber && guessRounds <=0 ){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }else if(guessRounds >0){
    content= <GameOver roundsNumber={guessRounds} userNumber={userNumber} configureNewGameHandler={configureNewGameHandler} />;
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,

  }
});
