import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

const CoffeeImage = ({image}: {image: string}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default CoffeeImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: normalize(327),
    height: normalize(202),
    position: 'absolute',
    top: normalize(136),
    left: normalize(24),
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: normalize(16),
  },
});
