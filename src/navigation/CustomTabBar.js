import React, {useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

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
        <TabBarIcon
          label={'Home'}
          focused={state.index === 0}
          //   icon={
          //     state.index === 0
          //       ? require('@/assets/images/home_active.png')
          //       : require('@/assets/images/home.png')
          //   }
        />
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
          //   icon={
          //     state.index === 1
          //       ? require('@/assets/images/bookings_active.png')
          //       : require('@/assets/images/bookings.png')
          //   }
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
          //   icon={
          //     state.index === 2
          //       ? require('@/assets/images/profile_active.png')
          //       : require('@/assets/images/profile.png')
          //   }
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
  },
  bottomNavContainer: {
    height: '12%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
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
