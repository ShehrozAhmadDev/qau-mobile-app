import {ScrollView, StyleSheet, View, Dimensions, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import colors from '../theme/color';
import {Divider, TouchableRipple} from 'react-native-paper';
import UIButton from '../components/ui/UIButton';
import UIText from '../components/ui/UIText';
import UITextInput from '../components/ui/UITextInput';
import {loginUser} from '../apis/loginUser';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const Login = ({}) => {
  const [authState, setAuthState] = useContext(AuthContext);

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginUser = async () => {
    try {
      if (email && password) {
        try {
          const payload = {email: email, password: password};
          const res = await loginUser({payload: payload});
          AsyncStorage.setItem('token', res.token);
          setAuthState({
            id: '',
            signedIn: true,
            token: res.token,
          });
          // onLogin(res.token);
        } catch (error) {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'Please Provide Values');
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log(error.message);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <UIText
          type="headlineMedium"
          styling="headerStyle"
          text="Login to your account"
        />
        <UITextInput
          value={email}
          type="Simple"
          setValue={setEmail}
          label="Email"
        />
        <UITextInput
          value={password}
          setValue={setPassword}
          type="Simple"
          label="Password"
        />

        <View style={styles.buttonContainer}>
          <UIButton
            icon=""
            text="Login"
            color={colors.mainBlue}
            action={() => {
              handleLoginUser();
            }}
          />
        </View>

        <Divider />

        <View style={styles.loginView}>
          <UIText
            type="titleMedium"
            styling="termStyle"
            text="Dont have an account?"
          />
          <TouchableRipple
            style={styles.marginLeft}
            onPress={() => navigation.navigate('Registeration')}>
            <UIText type="titleMedium" styling="termStyle" text="Signup" />
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  marginLeft: {
    marginLeft: 6,
    color: colors.secBlue,
  },
});
