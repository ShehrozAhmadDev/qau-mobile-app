import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import UITextInput from '../components/ui/UITextInput';
import UIText from '../components/ui/UIText';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {DatePickerModal} from 'react-native-paper-dates';
import colors from '../theme/color';
import {planTrip} from '../apis/planTrip';

navigator.geolocation = require('@react-native-community/geolocation');

const TripPlan = ({navigation}) => {
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    params => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );

  const handlePlanTrip = async () => {
    if ((!departure, !arrival, !date)) {
      Alert.alert('Error', 'Please Enter Details');
      return;
    }
    const body = {dropoff: arrival, pickup: departure, date: date};
    try {
      const res = await planTrip(body);
      navigation.navigate('TripPlanPreview', {
        closestRoute: res.closestRoute,
        actualRoute: {pickup: departure, dropoff: arrival},
      });
    } catch (error) {
      console.log(error);
    }
  };

  const stylesSearch = {
    container: {},
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      paddingHorizontal: 16,
      paddingBottom: 16,
      width: '100%',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      fontSize: 16,
      paddingHorizontal: 16,
      borderColor: '#E5E5E5',
      borderWidth: 1,
    },
    listView: {
      backgroundColor: '#FFFFFF',
      marginTop: 8,
      borderRadius: 8,
      top: 30,
      elevation: 1,
      position: 'absolute',
      zIndex: 100,
    },
    description: {
      fontSize: 16,
    },
    poweredContainer: {
      display: 'none',
    },
  };
  return (
    <View style={styles.container}>
      <UIText type="headlineMedium" styling="headerStyle" text="Plan Trip" />
      <View style={styles.autoPlacesContainer}>
        <UIText type="bodyMedium" styling="labelStyle" text="Departure" />

        <GooglePlacesAutocomplete
          placeholder="Departure"
          styles={stylesSearch}
          onPress={(data, details = null) => {
            if (details.geometry && details.geometry.location) {
              const {lat, lng} = details.geometry.location;
              setDeparture({latitude: lat, longitude: lng});
            }
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyC8sfL4qz3H4hOTb5azUcQKVig9h87nFW0',
            language: 'en',
            components: 'country:pk',
          }}
          currentLocation={true}
          currentLocationLabel="Use current location"
        />
        <UIText type="bodyMedium" styling="labelStyle" text="Arrival" />

        <GooglePlacesAutocomplete
          placeholder="Arrival"
          styles={stylesSearch}
          onPress={(data, details = null) => {
            if (details.geometry && details.geometry.location) {
              const {lat, lng} = details.geometry.location;
              setArrival({latitude: lat, longitude: lng});
            }
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyC8sfL4qz3H4hOTb5azUcQKVig9h87nFW0',
            language: 'en',
            components: 'country:pk',
          }}
          currentLocation={true}
          currentLocationLabel="Use current location"
        />
      </View>
      <UIText type="bodyMedium" styling="labelStyle" text="Date" />
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setOpen(true)}>
        <View>
          <UIText
            type="bodyMedium"
            text={date ? date.toString() : 'Select date'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={handlePlanTrip}>
        <Text style={styles.buttonText}>Plan Trip</Text>
      </TouchableOpacity>
      <DatePickerModal
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        locale="en"
        onConfirm={onConfirmSingle}
      />
    </View>
  );
};

export default TripPlan;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    padding: 20,
  },
  autoPlacesContainer: {
    height: 240,
    width: '100%',
    marginTop: 60,
  },

  datePickerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  button: {
    backgroundColor: colors.mainBlue,
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    width: '100%',
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});
