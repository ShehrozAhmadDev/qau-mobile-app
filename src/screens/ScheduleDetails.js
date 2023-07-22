/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import MapView, {Polyline, Marker} from 'react-native-maps';
import moment from 'moment';
const ScheduleDetails = ({navigation, route}) => {
  const {width, height} = Dimensions.get('window');

  const coordinates = route?.params?.route?.stops.map(stop => {
    return {
      latitude: parseFloat(stop?.latitude),
      longitude: parseFloat(stop?.longitude),
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MapView
        style={{
          width,
          height,
        }}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={true}>
        {/* Add markers for each coordinate */}
        {coordinates.map((coord, index) => (
          <Marker key={index} coordinate={coord} />
        ))}

        <Polyline
          coordinates={coordinates}
          strokeWidth={3}
          strokeColor={route?.params?.route?.color}
        />
      </MapView>
      <View style={styles.bottomContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Schedule Details</Text>
        <Text style={{fontSize: 20}}>{route?.params?.name}</Text>
        <Text style={{fontSize: 16}}>{route?.params?.route.route}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 16}}>
            {moment(route?.params?.startTime).format('DD MM YY, h:mm a')}
          </Text>
          <Text style={{fontSize: 16}}>---</Text>
          <Text style={{fontSize: 16}}>
            {moment(route?.params?.endTime).format('DD MM YY, h:mm a')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScheduleDetails;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 16, // Adjust the value to change the vertical position of the container
    left: 16, // Adjust the value to change the horizontal position of the container
    right: 16, // Adjust the value to change the horizontal position of the container
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
});
