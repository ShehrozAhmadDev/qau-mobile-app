import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UIText from '../components/ui/UIText';
import ScheduleHead from '../components/base/schedules/ScheduleHead';
import colors from '../theme/color';
import {getRoutes} from '../apis/getRoutes';
import RouteHead from '../components/base/routes/RouteHead';

const Routes = ({navigation}) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllUpdates = async () => {
    try {
      setLoading(true);
      const res = await getRoutes();
      setRoutes(res);
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
      <UIText type="headlineMedium" styling="headerStyle" text="All Routes" />
      <View>
        {routes.map((route, index) => (
          <RouteHead route={route} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.bg,
    height: Dimensions.get('window').height,
  },
});
