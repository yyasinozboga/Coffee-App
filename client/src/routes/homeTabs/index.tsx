import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../utils/constants';
import Home from '../../screens/home';
import Likes from '../../screens/likes';
import Orders from '../../screens/orders';
import Notifications from '../../screens/notifications';
import {RootTabParamList} from '../../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screens.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={screens.Likes} component={Likes} />
      <Tab.Screen name={screens.Orders} component={Orders} />
      <Tab.Screen name={screens.Notifications} component={Notifications} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
