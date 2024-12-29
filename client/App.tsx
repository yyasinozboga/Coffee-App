import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Router from './src/routes/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
