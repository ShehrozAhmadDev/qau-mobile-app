import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import CustomTabBar from './CustomTabBar';
import {Home, Schedules, Routes, Profile, Updates} from '../screens';
import colors from '../theme/color';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const navigationRef = React.createRef();
export const MainNavigation = ({initialRouteName}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...transparentNavbar,
        }}>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          initialParams={{initialRouteName}}
        />
        <Stack.Screen name="Schedules" component={Schedules} />
        <Stack.Screen name="Routes" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabs = ({route}) => {
  const initialRouteName = route.params.initialRouteName;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={tabBarOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Schedules" component={Schedules} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Updates" component={Updates} />
    </Tab.Navigator>
  );
};

const tabBarOptions = {
  inactiveTintColor: colors.secBlue,
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
  headerTransparent: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
  },
};
