import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../theme/color';
import {Text, Divider, TouchableRipple} from 'react-native-paper';
import UIText from '../components/ui/UIText';
import UIButton from '../components/ui/UIButton';
import UITextInput from '../components/ui/UITextInput';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [addedUser, setAddedUser] = useState('');

  const addUser = () => {
    if (email && name && password && confirmPassword) {
      if (password === confirmPassword) {
      } else {
        setError('Password Do not Match');
      }
    } else {
      setError('Please Input All The Fields');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <UIText
          testID="signUpHeader"
          type="headlineSmall"
          styling="headerStyle"
          text="Sign up to see schedules and routes for QAU Transport"
        />
        <UITextInput
          value={email}
          type="Simple"
          setValue={setEmail}
          label="Email"
        />
        <UITextInput
          value={name}
          setValue={setName}
          type="Simple"
          label="Full Name"
        />
        <UITextInput
          value={password}
          setValue={setPassword}
          label="Password"
          type="Simple"
        />
        <UITextInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          label="Confirm Password"
          type="Simple"
        />
        <UIText
          testID="errorText"
          type="bodyLarge"
          styling="termStyle"
          text={error}
        />

        <View style={styles.buttonContainer}>
          <UIButton
            text="Sign up"
            color={colors.mainBlue}
            icon=""
            action={() => {
              addUser();
            }}
          />
          {addedUser && (
            <UIText
              testID="addedUser"
              type="bodyLarge"
              styling="termStyle"
              text={`${addedUser} is added Successfully`}
            />
          )}
        </View>
        <View style={{margin: 20}}>
          <UIText
            testID="agreement"
            type="bodyLarge"
            styling="termStyle"
            text="By Signing up You agree to our"
          />

          <UIText
            testID="privacyPolicy"
            type="bodyLarge"
            styling="termStyle"
            // style={[styles.termsStyle, {fontWeight: 'bold'}]}
            text="Terms & Privacy Policy"
          />
        </View>
        <Divider />

        <View style={styles.loginView}>
          <UIText
            testID="account"
            text="Have an account?"
            type="titleMedium"
            styling="termStyle"
          />
          <TouchableRipple onPress={() => navigation?.navigate('Login')}>
            <UIText
              testID="Login"
              type="titleMedium"
              text="Login"
              styling="termStyle"
            />
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  orContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
  },
  termsStyle: {
    color: colors.darkGrey,
    textAlign: 'center',
  },
  loginView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  fieldsContainer: {
    marginTop: 40,
  },
});
