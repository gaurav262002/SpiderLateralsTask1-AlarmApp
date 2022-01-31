import React,{useState} from "react";
import {  SafeAreaView,StyleSheet,View,} from "react-native";
import {ListItem,Button,Switch} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';


const AlarmList=()=>{
   const {Alarms,setAlarms}=useState([])


    return (
      <View>
        
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>2:36</ListItem.Title>
            <ListItem.Subtitle>AM/PM</ListItem.Subtitle>
          </ListItem.Content>
         
          <Button
            containerStyle={{
              width: 50,
            }}
            icon={{
              name: "trash",
              type: "font-awesome",
              size: 25,
              color: "black",
            }}
            type="clear"
            titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
          />
        </ListItem>
      </View>
    );
}

export default AlarmList;

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
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:30,
    },
    addBtnContainer:{
        flexDirection:'column',
        flex:1,
        alignSelf:'flex-end',
        position: 'absolute',
        bottom:45
       
    },
    
  });