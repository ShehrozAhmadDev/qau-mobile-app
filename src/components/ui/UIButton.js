import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const UIButton = ({color, icon, action, text}) => {
  const actionWrapper = () => {
    action();
  };

  return (
    <Button
      icon={icon}
      mode="contained"
      style={[styles.buttonStyle, {backgroundColor: color}]}
      // eslint-disable-next-line react-native/no-inline-styles
      labelStyle={{fontSize: 20, fontWeight: 'bold'}}
      onPress={actionWrapper}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    width: '100%',
    height: 48,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UIButton;
