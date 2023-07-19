import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import UIText from '../components/ui/UIText';
import colors from '../theme/color';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <UIText type="headlineMedium" styling="headerStyle" text="Home" />
      <TouchableOpacity
        style={{
          backgroundColor: colors.secBlue,
          color: 'white',
          padding: 10,
          borderRadius: 10,
          height: 70,
          width: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Updates')}>
        <Text style={{fontSize: 24, color: 'white'}}>Updates</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
