import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import colors from '../../../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import ArrowIcon from '../../../assets/Arrow.png';
const ScheduleHead = ({schedule}) => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate('ScheduleDetails', schedule);
  };
  return (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={navigateToDetails}>
      <View style={styles.innerContainer}>
        <View style={{marginLeft: 10}}>
          <Text variant="titleMedium" style={{fontWeight: 'bold'}}>
            {schedule.name}
          </Text>
          <Text variant="labelMedium" style={{color: colors.darkGrey}}>
            {moment(schedule.createdAt).format('MMMM DD YYYY')}
          </Text>
        </View>
        <Text
          marginLeft={20}
          variant="bodyLarge"
          fontWeight="bold"
          style={{fontWeight: 'bold', fontSize: 20}}>
          {schedule.route.route}
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

export default ScheduleHead;
