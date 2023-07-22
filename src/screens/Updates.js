import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UIText from '../components/ui/UIText';
import {getUpdates} from '../apis/getUpdates';
import UpdateHead from '../components/base/updates/UpdateHead';

const Updates = ({navigation}) => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllUpdates = async () => {
    try {
      setLoading(true);
      const res = await getUpdates();
      setUpdates(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUpdates();
  }, []);
  return (
    <View style={styles.container}>
      <UIText type="headlineMedium" styling="headerStyle" text="Updates" />
      <View>
        {updates.map((update, index) => (
          <UpdateHead update={update} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
