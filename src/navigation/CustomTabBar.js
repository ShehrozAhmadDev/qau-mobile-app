import React, {useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import colors from '../theme/color';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../assets/home.png';
import Profile from '../assets/profile.png';
import Schedule from '../assets/schedule.png';

export default function CustomTabBar({state, navigation}) {
  const [flexDirection] = useState({flexDirection: 'row-reverse'});

  return (
    <View style={[flexDirection, styles.bottomNavContainer]}>
      <TouchableOpacity
        onPress={() => {
          if (state.index !== 0) {
            navigation.navigate('Home');
          }
        }}
        style={[styles.navButton, styles.homeButton]}>
        <TabBarIcon label={'Home'} focused={state.index === 0} icon={Home} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (state.index !== 1) {
            navigation.navigate('Schedules');
          }
        }}
        style={[styles.navButton, styles.bookingsButton]}>
        <TabBarIcon
          label={'Schedules'}
          focused={state.index === 1}
          icon={Schedule}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (state.index !== 2) {
            navigation.navigate('Profile');
          }
        }}
        style={[styles.navButton, styles.profileButton]}>
        <TabBarIcon
          label={'Profile'}
          focused={state.index === 2}
          icon={Profile}
        />
      </TouchableOpacity>
    </View>
  );
}

const TabBarIcon = ({label, focused, style, icon}) => (
  <View style={style}>
    {focused ? (
      <View style={styles.tabIconContainer}>
        <View style={styles.tabIconActive}>
          <Image source={icon} style={[styles.imgContain]} />
        </View>
        <Text>{label}</Text>
      </View>
    ) : (
      <View style={styles.tabIconContainer}>
        <View style={styles.tabIconActive}>
          <Image source={icon} style={[styles.imgContain]} />
        </View>
        <Text>{label}</Text>
      </View>
    )}
  </View>
);

export const styles = StyleSheet.create({
  imgContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tabIconContainer: {
    alignItems: 'center',
  },
  tabIconActive: {
    width: 22,
    height: 22,
    borderRadius: 22,
    marginBottom: 5,
    // backgroundColor: 'grey',
  },
  bottomNavContainer: {
    height: '12%',
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.secBlue,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    left: 0,
    bottom: 0,
  },
  navButton: {
    width: '24%',
    height: '90%',
    position: 'absolute',
  },
  homeButton: {
    right: '7%',
    bottom: '-15%',
  },
  bookingsButton: {
    left: '38%',
    bottom: '-15%',
  },
  profileButton: {
    left: '7%',
    bottom: '-15%',
  },
});
