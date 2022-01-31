import React,{useState} from "react";
import {  SafeAreaView,StyleSheet,View,} from "react-native";
import {ListItem,Button,Switch} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker=()=>{
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };


  const showtimepicker = () => {
    showMode("time");
  };
    return (
      <View style={styles.addBtnContainer}>
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
            backgroundColor: "grey",
            width: 50,
            height: 50,
            
          }}
          containerStyle={{
            width: 50,
            height: 50,
            marginRight:25
          }}
          icon={{
            name: "plus",
            type: "font-awesome",
            size: 25,
            color: "black",
          }}
          type="clear"
          onPress={showtimepicker}
        />
        {show && (
         <DateTimePicker
           testID="dateTimePicker"
           value={date}
           mode={mode}
           is24Hour={false}
           display="default"
           onChange={onChange}
         />
       )}
      </View>
    );
    
}

export default TimePicker;


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