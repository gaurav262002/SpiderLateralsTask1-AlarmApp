import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,TouchableOpacity,
  TextInput,
} from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

function ButtonsRow({ children }) {
  return <View style={styles.buttonsRow}>{children}</View>;
}



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 0,
      timerReset: false,
      stopwatchReset: false,
      setTimer: '',
      setHour: '',
      setMin: '',
      setSec: '',
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart,timerReset:false});
  }

  resetTimer() {
    this.setState({ 
      timerStart: false,
       timerReset: true,
       setHour: '',
       setMin: '',
       setSec: '',
      totalDuration:0, });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  SaveTimer = (text) => {
    this.setState({ setTimer: text });
  };
  SaveTimerHour = (text) => {
    this.setState({ setTimer: '' });
    this.setState({ setHour: text });
    this.setState({ setTimer: text + 'hr' });
  };
  SaveTimerMinute = (text) => {
    this.setState({ setMin: text });
    this.setState({ setTimer: this.state.setTimer + text + 'min' });
  };
  SaveTimerSec = (text) => {
    
    this.setState({ setSec: text });
    this.setState({ setTimer: this.state.setTimer + text + 'sec' });
  };
  ScheduleTimer() {
    this.setState({
      totalDuration:
        this.state.setHour* 1000 * 60 * 60 +
        this.state.setMin * 60 * 1000 +
        this.state.setSec * 1000
    });
  }
  ButtonsRow({ children }) {
    return <View style={styles.buttonsRow}>{children}</View>;
  }
  render() {
    return (
      <View style={styles.container}>
       
        <Timer 
            style={styles.time}
            totalDuration={this.state.totalDuration}
            start={this.state.timerStart}
            reset={this.state.timerReset}
            options={options}
            handleFinish={handleTimerComplete}
            getTime={(time)=>
              this.getFormattedTime(time)}
            
            
            
        />
       <Text style={styles.time}>Enter the Duration Below</Text>
        <ButtonsRow>
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={ hrs => this.SaveTimerHour(hrs)}
            placeholder="Hour"
            keyboardType="numeric"
            autoFocus = {true}
          />
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={min => this.SaveTimerMinute(min)}
            placeholder="Min"
            keyboardType="numeric"
            autoFocus = {true}
          />
          <TextInput
            style={{
              fontSize: 25,
              margin: 15,
              color: '#fff',
              //textAlign: 'center',
            }}
            placeholderTextColor="#9a73ef"
            onChangeText={sec => this.SaveTimerSec(sec)}
            placeholder="Sec"
            keyboardType="numeric"
            autoFocus = {true}
          />
        </ButtonsRow>
        <ButtonsRow>
          <Button
          color={!this.state.timerStart?"green":'red'}
            title={!this.state.stopwatchStart ? "Start" : "Stop"}
            onPress={() => {
              if (this.state.totalDuration === 0) {
                alert('Please set timer first');
              } else {
               
                this.toggleTimer();
              }
            }}
            
          />
          <Button
            title="Set Timer"
            onPress={() => {
              
                this.ScheduleTimer();
              
            }}
          />
          
          <Button
            title="Reset"
            onPress={this.resetTimer}
          />
        </ButtonsRow>
      </View>
      
    );
  }
}

const handleTimerComplete = () => alert('Timer Complete');

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 50,
    color: 'red',
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  time: {
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  timerlayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  startBtn:{
    backgroundColor:'red'
  }
});
