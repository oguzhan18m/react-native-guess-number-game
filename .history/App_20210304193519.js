import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  const startGameHandler = (selectedNum) =>{
    setUserNumber(selectedNum);
    setGuessRounds(0);
  }

    const gameOverHandler = (numOfRounds) =>{
      setGuessRounds(numOfRounds);
  }
  
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  
  console.log(userNumber);

  if(userNumber){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
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
