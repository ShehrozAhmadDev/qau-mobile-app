import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Schedules,
  Routes,
  Profile,
  Registeration,
  Login,
  Welcome,
} from '../screens';
const Stack = createStackNavigator();

export const navigationRef = React.createRef();

export const AuthNavigation = ({initialRouteName}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          ...transparentNavbar,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Registeration" component={Registeration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const tabBarOptions = {
  inactiveTintColor: 'blue',
  showLabel: false,
  style: {
    position: 'absolute',
    borderTopColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: 'transparent',
  },
};

const transparentNavbar = {
  title: ' ',
};
