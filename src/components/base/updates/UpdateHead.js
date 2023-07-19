import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import colors from '../../../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
const UpdateHead = ({update}) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.innerContainer}>
        <View style={{marginLeft: 10}}>
          <Text variant="titleSmall" style={{fontWeight: 'bold'}}>
            {update.title}
          </Text>
          <Text variant="bodyMedium">
            {moment(update.createdAt).format('MMM Do YY')}
          </Text>
          <Text variant="labelSmall" style={{color: colors.darkGrey}}>
            {update.description}
          </Text>
        </View>
      </View>
      <View>
        {/* Logo Goes Here */}
        <Icon style={styles.iconStyle} name="camera" size={25} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width,
    marginTop: 5,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {marginRight: 10},
});

export default UpdateHead;
