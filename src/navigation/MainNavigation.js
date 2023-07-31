import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import CustomTabBar from './CustomTabBar';
import colors from '../theme/color';
import ScheduleDetails from '../screens/ScheduleDetails';
import Schedules from '../screens/Schedules';
import Routes from '../screens/Routes';
import Updates from '../screens/Updates';
import Trips from '../screens/Trips';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import RouteDetails from '../screens/RouteDetails';
import AboutUs from '../screens/AboutUs';
import TripPlan from '../screens/TripPlan';
import TripPlanPreview from '../screens/TripPlanPreview';
import ContactUs from '../screens/ContactUs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const navigationRef = React.createRef();
export const MainNavigation = ({initialRouteName}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secBlue,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="MyTab"
          component={MainTabs}
          initialParams={{initialRouteName}}
          options={{headerShown: false}} // Hide the header for "Home" screen
        />
        <Stack.Screen name="Schedules" component={Schedules} />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
        <Stack.Screen name="RouteDetails" component={RouteDetails} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="TripPlan" component={TripPlan} />
        <Stack.Screen name="TripPlanPreview" component={TripPlanPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MainTabs = ({route}) => {
  const initialRouteName = route.params.initialRouteName;

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#89CFF0',
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      initialRouteName={initialRouteName}>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.secBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="Home"
        component={Home}
        initialParams={{initialRouteName}}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.secBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="Schedules"
        component={Schedules}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.secBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
