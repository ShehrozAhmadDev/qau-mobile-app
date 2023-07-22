import React, {useState, useEffect, useContext} from 'react';

import {View, Image, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Main from './Main';
import {AuthContext, AuthContextProvider} from './src/context/AuthContext';
import Welcome from './src/assets/Welcome.jpg';
const App = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <AuthContextProvider>
      <RenderApp isReady={isReady} setIsReady={setIsReady} />
    </AuthContextProvider>
  );
};
const RenderApp = ({isReady, setIsReady}) => {
  const [token, setToken] = useState(null);
  const [authState, setAuthState] = useContext(AuthContext);

  const getApiToken = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      setToken(getToken || ''); // Make sure to set an empty string if token is null/undefined
      if (getToken) {
        setAuthState({id: '', signedIn: true, token: getToken});
      }
      setTimeout(() => {
        setIsReady(true);
      }, 2000);
    } catch (error) {
      console.error('Error retrieving authentication token:', error);
    }
  };

  useEffect(() => {
    getApiToken();
  }, []);

  if (isReady) {
    return <Main />;
  } else {
    return <RenderSplash />;
  }
};
const RenderSplash = () => {
  return (
    <View style={styles.splashContainer}>
      <Image
        style={styles.splashContainer}
        source={Welcome}
        resizeMode="cover"
      />
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
