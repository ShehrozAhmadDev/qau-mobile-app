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
      <View>
        <UIButton
          action={() => {
            navigation.navigate('Login');
          }}
          color={colors.mainBlue}
          width={300}
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
    height: Dimensions.get('window').height,

    marginVertical: 100,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
