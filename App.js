import React, {useState, useEffect} from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Main from './Main';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState();
  const getApiToken = async () => {
    const getToken = await AsyncStorage.getItem('token');
    setToken(getToken);
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  };
  useEffect(() => {
    getApiToken();
  });

  return <RenderApp isReady={isReady} token={token} />;
};
const RenderApp = ({isReady, token}) => {
  if (isReady) {
    return <Main isLoggedIn={token ? true : false} />;
  } else {
    return <RenderSplash />;
  }
};
const RenderSplash = () => {
  return (
    <View style={styles.splashContainer}>
      <Text>Splash</Text>
      {/* <Image
          style={styles.splashContainer}
          source={require('@/assets/images/SplashScreen.jpeg')}
          resizeMode="cover"
        /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {height: '100%', width: '100%'},
});
