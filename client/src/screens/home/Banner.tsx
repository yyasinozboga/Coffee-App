import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

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
    left: normalize(24),
    top: normalize(211),
    width: normalize(327),
    height: normalize(140),
  },
});
