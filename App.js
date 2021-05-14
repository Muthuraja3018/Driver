  
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

const stackNavigator = createStackNavigator({
  Signup : SignupScreen,
  Signin: SigninScreen,
  Home: HomeScreen
});

const App = createAppContainer(stackNavigator);

export default App;