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
    labelStyle: {
      color: colors.darkGrey,
      fontSize: 16,
      marginTop: 1,
      marginBottom: 5,
      marginLeft: 10,
      textAlign: 'left',
      width: '100%',
      fontWeight: 'bold',
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
          : styling === 'labelStyle'
          ? styles.labelStyle
          : null
      }>
      {text}
    </Text>
  );
};

export default UIText;
