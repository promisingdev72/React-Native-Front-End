import MainNavigator from './src/containers/main/MainNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return <NavigationContainer>{<MainNavigator />}</NavigationContainer>;
}

export default App;
