import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import UIText from '../components/ui/UIText';
import colors from '../theme/color';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <UIText type="headlineMedium" styling="headerStyle" text="Contact Us" />
      <View style={{marginTop: 150}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300,
            marginTop: 30,
          }}>
          <Text style={{fontSize: 19}}>Phone:</Text>
          <View>
            <Text style={{fontSize: 17}}>+9231477141714</Text>
          </View>
        </View>
        <View style={[styles.separator]} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 19}}>Email:</Text>
          <View>
            <Text style={{fontSize: 17}}>zainafaqkhan2d@gmail.com</Text>
            <Text style={{fontSize: 17}}>usmanabbasi39@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 19}}>Facebook:</Text>
          <View>
            <Text style={{fontSize: 17}}>QAU Transportation App</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  separator: {
    height: 1,
    width: '100%',
    borderBottomWidth: 2,
    marginVertical: 15,
    borderColor: colors.mainBlue,
  },
});
