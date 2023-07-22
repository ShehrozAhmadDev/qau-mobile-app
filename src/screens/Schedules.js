import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getSchedules} from '../apis/getSchedules';
import UIText from '../components/ui/UIText';
import ScheduleHead from '../components/base/schedules/ScheduleHead';
import colors from '../theme/color';

const Schedules = ({navigation}) => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllUpdates = async () => {
    try {
      setLoading(true);
      const res = await getSchedules();
      setSchedules(res);
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
      <UIText
        type="headlineMedium"
        styling="headerStyle"
        text="Today's Schedules"
      />
      <View>
        {schedules.map((schedule, index) => (
          <ScheduleHead schedule={schedule} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.bg,
    height: Dimensions.get('window').height,
  },
});
