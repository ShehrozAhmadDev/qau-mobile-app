import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../theme/color';

const Trips = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Trips</Text>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate('TripPlan')}>
        <Text style={styles.buttonText}>Plan Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mainBlue,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});
