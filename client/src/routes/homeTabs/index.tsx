import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../utils/constants';
import Home from '../../screens/home';
import Likes from '../../screens/likes';
import Orders from '../../screens/orders';
import Notifications from '../../screens/notifications';
import {RootTabParamList} from '../../types';
import HomeIcon from '../../../assets/icons/Home';
import Heart from '../../../assets/icons/Heart';
import Bag from '../../../assets/icons/Bag';
import Notification from '../../../assets/icons/Notification';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#C67C4E',
        tabBarInactiveTintColor: '#A2A2A2',
      }}>
      <Tab.Screen
        name={screens.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={screens.Likes}
        component={Likes}
        options={{
          tabBarIcon: ({color}) => <Heart fill={color} />,
        }}
      />
      <Tab.Screen
        name={screens.Orders}
        component={Orders}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({color}) => <Bag fill={color} />,
        }}
      />
      <Tab.Screen
        name={screens.Notifications}
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => <Notification fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
