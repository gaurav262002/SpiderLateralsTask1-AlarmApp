import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Homescreen from '../components/Homescreen'
import Level1 from '../components/Level1';
import Level2 from '../components/Level2';



const screens = {
    Home: {
        screen: Homescreen,
        navigationOptions:{
            
            headerStyle :{backgroundColor:''},
            
        }
    },
    Level1:{
        screen: Level1,
        navigationOptions:{
            headerStyle :{backgroundColor:'grey'}
        }
    },
    Level2:{
        screen: Level2,
        navigationOptions:{
            headerStyle :{backgroundColor:'grey'}
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);