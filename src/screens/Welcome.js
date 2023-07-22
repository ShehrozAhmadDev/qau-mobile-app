import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import React from 'react';
import UIText from '../components/ui/UIText';
import UIButton from '../components/ui/UIButton';
import colors from '../theme/color';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <UIText type="headlineMedium" styling="headerStyle" text="Welcome" />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/Welcome.jpg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          action={() => {
            navigation.navigate('Login');
          }}
          color={colors.mainBlue}
          text={'Login'}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    paddingVertical: 100,
  },
  tinyLogo: {
    width: 340,
    height: 340,
  },
  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
    width: '100%',
  },
});
