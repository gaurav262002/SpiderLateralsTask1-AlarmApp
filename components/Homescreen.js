import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


 const Homescreen = (props) => {

    const toLevel1 = () =>{
        props.navigation.navigate('Level1');
    }
 
    const toLevel2 = () =>{
      props.navigation.navigate('Level2');
  }

  return (
    <View style={styles.container}>
      <Text>Spider AppDev task 1</Text>
      <StatusBar style="auto" />
      <Button  title='Level 1' style={styles.button} onPress={toLevel1}></Button>
      <Button  title='Level 2' style={styles.button} onPress={toLevel2}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    margin:30
    
  }
});

export default Homescreen