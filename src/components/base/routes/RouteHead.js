import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ArrowIcon from '../../../assets/Arrow.png';
const RouteHead = ({route}) => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate('RouteDetails', route);
  };
  return (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={navigateToDetails}>
      <View style={styles.innerContainer}>
        <Text
          marginLeft={20}
          variant="bodyLarge"
          fontWeight="bold"
          style={{fontWeight: 'bold', fontSize: 20}}>
          {route.route}
        </Text>
      </View>
      <View>
        {/* Logo Goes Here */}
        <Image style={styles.tinyLogo} source={ArrowIcon} />
        {/* <Icon style={styles.iconStyle} name="camera" size={25} /> */}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    width: Dimensions.get('window').width,
    marginTop: 5,
    backgroundColor: 'white',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {marginRight: 10},
  tinyLogo: {
    width: 25,
    height: 25,
  },
});

export default RouteHead;
