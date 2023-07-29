import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '../theme/color';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>QAU Transport App</Text>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Schedules')}>
          <Text style={styles.buttonText}>Schedules</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Routes')}>
          <Text style={styles.buttonText}>Routes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('TripPlan')}>
          <Text style={styles.buttonText}>Plan Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Updates')}>
          <Text style={styles.buttonText}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    backgroundColor: colors.mainBlue,
    color: 'white',
    padding: 10,
    borderRadius: 10,
    height: 70,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  buttonText: {fontSize: 24, color: 'white'},
  headerText: {fontSize: 28, margin: 50, fontWeight: 'bold'},
});
