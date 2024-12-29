import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <Image
      source={require('../../../assets/images/Banner.png')}
      style={styles.banner}
    />
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    left: 24,
    top: 211,
    width: 327,
    height: 140,
  },
});
