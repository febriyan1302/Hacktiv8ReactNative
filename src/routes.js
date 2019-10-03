import InsertData from "./insert";
import ViewData from "./view";
import UpdateData from "./update";
import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/Entypo';

import { createDrawerNavigator } from 'react-navigation-drawer';
import React from "react";

export const Drawer = createDrawerNavigator({
    Update: UpdateData
});

export const BottomTabNavigation = createBottomTabNavigator(
    {
        Home: InsertData,
        View: ViewData,
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
                        <Icon name="list" size={20} color={focused ? '#1976d2' : '#757575'} />
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