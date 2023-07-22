import React, {useContext, useState} from 'react';

import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import {AuthNavigation} from './src/navigation/AuthNavigation';
import {MainNavigation} from './src/navigation/MainNavigation';
import {AuthContext} from './src/context/AuthContext';

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <RenderNavigation />
    </View>
  );
};

const RenderNavigation = () => {
  const [initialRouteName] = useState('Home');
  const [authInitialRouteName] = useState('Welcome');
  const [authState, setAuthState] = useContext(AuthContext);

  return authState.signedIn ? (
    <MainNavigation initialRouteName={initialRouteName} />
  ) : (
    <AuthNavigation initialRouteName={authInitialRouteName} />
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
