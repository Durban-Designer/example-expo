import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLoading from './src/pages/AuthLoading';
import LoginScreen from './src/pages/Login';
import RegisterScreen from './src/pages/Register';
import HomeScreen from './src/pages/HomeScreen';
import LinksScreen from './src/pages/LinksScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator({
  Home: HomeScreen ,
  Links: LinksScreen,
  Settings: SettingsScreen
},
{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
});

const AuthNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen}
});

const Nav = createAppContainer(BottomTab);

export default Nav;
