import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash/Splash';
import Home from './src/Screens/Home/Home';
import SelectCity from './src/Screens/SelectCity/SelectCity';
const stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <stack.Screen name="Splash" component={Splash}></stack.Screen>
          <stack.Screen name="select-city" component={SelectCity} />
          <stack.Screen name="home" component={Home}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
