import React,{useState} from "react";
import {  SafeAreaView,StyleSheet,View,} from "react-native";
import AlarmList from "./AlarmComponents/AlarmList";
import TimePicker from "./AlarmComponents/TimerPicker";


const Alarm2=()=> {
    

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.alarmList}>
          <AlarmList />
          <TimePicker/>
         
        </SafeAreaView>
      </View>
    );
}

export default Alarm2;



//Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
    },
    heading: {
      // fontWeight: "bold",
      fontSize: 25,
      padding: 20,
    },
    timePicker: {
      paddingTop: '10%',
      width: '50%',
      // right: '10%',
      bottom: 20,
    },
    alarmList: {
      flex: 1,
      width: '100%',
    }
  });