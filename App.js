import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Homescreen from './components/Homescreen';
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Navigator from './routes/Homestack'

function App () {

  

  return (
     <Navigator />
  );
}

export default App;

