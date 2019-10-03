import Home from "../home";
import List from "../list";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/dist/Entypo';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';
import React from "react";

export const Drawer = createDrawerNavigator({
  Home: Home,
  List: List
});

export const TabNavigation = createMaterialTopTabNavigator({
  Home: Home,
  List: List,
});

export const StackNavigator = createStackNavigator({
  Home: Home,
  List: List,
}, {
  A: {
    screen: Home,
    navigationOptions: () => ({
      title: 'A',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`,
    }),
  },
  B: {
    screen: List,
    navigationOptions: () => ({
      title: 'B',
    }),
  },
});

export const BottomTabNavigation = createBottomTabNavigator(
    {
      Home: Home,
      List: List,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Home') {
            return (
              <Icon name="home" size={20} color={focused ? '#1976d2' : '#757575'} />
            );
          } else {
            return (
                <Icon name="star" size={20} color={focused ? '#1976d2' : '#757575'} />
            );
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: '#FF6F00',
        inactiveTintColor: '#263238',
      },
    }
    );