import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';
import moment from 'moment';
import MapViewDirections from 'react-native-maps-directions';

const TripPlanPreview = ({navigation, route}) => {
  const {width, height} = Dimensions.get('window');
  const closestRoute = route.params.closestRoute;
  const actualRoute = route.params.actualRoute;
  const [actualRouteCoordinates, setActualRouteCoordinates] = useState([]);
  const coordinates = closestRoute?.stops.map(stop => {
    return {
      latitude: parseFloat(stop?.latitude),
      longitude: parseFloat(stop?.longitude),
    };
  });

  useEffect(() => {
    if (actualRoute) {
      const actualRouteCoords = [
        {
          latitude: parseFloat(actualRoute.pickup.latitude),
          longitude: parseFloat(actualRoute.pickup.longitude),
        },
        {
          latitude: parseFloat(actualRoute.dropoff.latitude),
          longitude: parseFloat(actualRoute.dropoff.longitude),
        },
      ];
      setActualRouteCoordinates(actualRouteCoords);
    }
  }, [actualRoute]);

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
        {/* Render the initial driving route */}
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey="AIzaSyC8sfL4qz3H4hOTb5azUcQKVig9h87nFW0"
          strokeWidth={3}
          strokeColor={'red'}
        />
        {/* Render the walking route from actualRoute pickup to the origin */}
        {actualRouteCoordinates.length > 0 && (
          <MapViewDirections
            origin={actualRouteCoordinates[0]}
            destination={coordinates[0]}
            mode="WALKING"
            apikey="AIzaSyC8sfL4qz3H4hOTb5azUcQKVig9h87nFW0"
            strokeWidth={3}
            strokeColor="blue" // Choose your desired color for the walking route
            lineDashPattern={[10, 5]} // Customize the pattern to make it look like dots
          />
        )}
        {/* Render the walking route from the destination to actualRoute drop-off */}
        {actualRouteCoordinates.length > 0 && (
          <MapViewDirections
            origin={coordinates[1]}
            destination={actualRouteCoordinates[1]}
            mode="WALKING"
            apikey="AIzaSyC8sfL4qz3H4hOTb5azUcQKVig9h87nFW0"
            strokeWidth={3}
            strokeColor="green" // Choose your desired color for the walking route
            lineDashPattern={[10, 5]} // Customize the pattern to make it look like dots
          />
        )}
      </MapView>
      <View style={styles.bottomContainer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trip Details</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>{closestRoute?.route}</Text>
        <View style={styles.inlineContainer}>
          <Text style={{fontSize: 16}}>{closestRoute.stops[0].stopName}</Text>
          <Text style={{fontSize: 16}}>--</Text>
          <Text style={{fontSize: 16}}>{closestRoute.stops[1].stopName}</Text>
        </View>
        <View style={styles.inlineContainer}>
          <Text style={{fontSize: 16}}>
            {moment(route?.params?.startTime).format('DD/MM/YY, h:mm a')}
          </Text>
          <Text style={{fontSize: 16}}>--</Text>
          <Text style={{fontSize: 16}}>
            {moment(route?.params?.endTime).format('DD/MM/YY, h:mm a')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TripPlanPreview;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  inlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
