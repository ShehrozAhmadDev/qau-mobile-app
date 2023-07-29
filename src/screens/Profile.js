import React, {useState, useEffect, useContext} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import colors from '../theme/color';
import {getUser} from '../apis/getUser';
import {AuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [authState, setAuthState] = useContext(AuthContext);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await getUser();
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    const token = AsyncStorage.removeItem('token');
    setAuthState({
      id: '',
      signedIn: false,
      token: null,
    });
  };

  const handleNavigationtoAbout = () => {
    navigation.navigate('AboutUs');
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <View style={[styles.mainContainer]}>
      <Text style={{fontSize: 26, textAlign: 'center', margin: 5}}>
        Profile Details
      </Text>
      <View style={[styles.profileContainer]}>
        <View style={[styles.profileItem]}>
          <Text style={{fontSize: 19, margin: 5}}>Name: {user?.name}</Text>
          <Text style={{fontSize: 19, margin: 5}}>Email: {user?.email}</Text>
          <Text style={{fontSize: 19, margin: 5}}>
            Department: {user?.department || 'N/A'}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={handleNavigationtoAbout}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <View style={[styles.separator]} />
        <TouchableOpacity style={[styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <View style={[styles.separator]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 100,
    display: 'flex',
    justifyContent: 'space-between',
    height: 600,
  },
  profileContainer: {
    borderColor: colors.mainBlue,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  profileItem: {
    marginVertical: 5,
  },

  separator: {
    height: 1,
    width: '100%',
    borderBottomWidth: 2,
    marginVertical: 15,
    borderColor: colors.mainBlue,
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoutButton: {
    backgroundColor: colors.red,
    padding: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.mainBlue,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Profile;
