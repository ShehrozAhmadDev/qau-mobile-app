import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../theme/color';
const UIText = ({text, type, styling, children, ...props}) => {
  const styles = StyleSheet.create({
    headerText: {
      color: colors.darkGrey,
      fontWeight: 'bold',
      margin: 10,
      marginTop: 20,
      textAlign: 'center',
    },
    termStyle: {
      color: colors.darkGrey,
      textAlign: 'center',
    },
  });
  return (
    <Text
      variant={type}
      {...props}
      style={
        styling === 'headerStyle'
          ? styles.headerText
          : styling === 'termStyle'
          ? styles.termStyle
          : null
      }>
      {text}
    </Text>
  );
};

export default UIText;
