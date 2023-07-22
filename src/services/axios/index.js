import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://192.168.1.6:4000/api/',
});

instance.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('token');

  if (typeof token !== 'undefined' && token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

export default instance;
