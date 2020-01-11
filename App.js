import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeStackNavigator } from './components/App/Home/HomeStack';
import { ReceiptStackNavigator } from './components/App/Receipts/ReceiptStack';
import { ScanStackNavigator } from './components/App/Scan/ScanStack';
import ProfilePage from './components/App/Profile/ProfilePage';

import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';

import { getCurrentUser } from './components/Firebase/Firebase'

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Scan: ScanStackNavigator,
    Receipts: ReceiptStackNavigator,
    Profile: ProfilePage,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home'
        } else if (routeName === 'Receipts') {
          iconName = 'ios-list'
        } else if (routeName === 'Scan') {
          iconName = 'md-qr-scanner'
        } else if (routeName === 'Profile') {
          iconName = 'md-person'
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: true,
    },
  }
);

const AuthTabNavigator = createBottomTabNavigator(
  {
    Login: LoginPage,
    "Sign Up": SignupPage,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Login') {
          iconName = 'md-key'
        } else if (routeName === 'Sign Up') {
          iconName = 'md-person-add'
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: 'Login',
    tabBarOptions: {
      showIcon: true,
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    App: AppTabNavigator,
    Auth: AuthTabNavigator,
  },
  {
    initialRouteName: `${getCurrentUser() != null ? 'App' : 'Auth'}`,
  }
);

export default createAppContainer(AppSwitchNavigator);
