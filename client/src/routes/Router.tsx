import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utils/constants';
import HomeTabs from './homeTabs';
import Detail from '../screens/detail';
import OnBoarding from '../screens/onBoarding';
import Delivery from '../screens/delivery';
import {RootStackParamList} from '../types';
import Orders from '../screens/orders';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={screens.Main} component={HomeTabs} />
      <Stack.Screen name={screens.Detail} component={Detail} />
      <Stack.Screen name={screens.Delivery} component={Delivery} />
      <Stack.Screen name={screens.Orders} component={Orders} />
    </Stack.Navigator>
  );
};

export default Router;
