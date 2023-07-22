import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/color';

const UITextInput = ({label, value, setValue, type}) => {
  return (
    <TextInput
      testID={label}
      right={<Icon name="search" color="lightgrey" size={14} />}
      placeholder={label}
      value={value}
      mode="outlined"
      outlineColor="lightgrey"
      onChangeText={text => setValue(text)}
      style={type === 'SearchBar' ? styles.searchBarStyle : styles.inputStyle}
      theme={{roundness: 10, colors: {primary: 'grey'}}}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    borderColor: colors.darkGrey,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#FAF9F6',
  },
  searchBarStyle: {
    width: '100%',
    borderColor: colors.darkGrey,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#FAF9F6',
  },
});

export default UITextInput;
