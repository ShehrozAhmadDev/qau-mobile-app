import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text>
        Welcome to Quaid-e-Azam University Transportation Services About Us: At
        Quaid-e-Azam University, we understand the importance of convenient and
        reliable transportation for our students, faculty, and staff. Our
        Transportation Services aim to enhance the overall university experience
        by providing safe, efficient, and comfortable travel solutions to and
        from the campus. Our Commitment: Our primary commitment is to ensure the
        convenience and well-being of our university community. We strive to
        create an inclusive and accessible transportation system that caters to
        the diverse needs of our students, faculty, and staff. Whether you're
        commuting daily or just visiting the campus occasionally, our services
        are designed to make your journey seamless and stress-free.
      </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});
