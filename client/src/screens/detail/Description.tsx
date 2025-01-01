import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

const Description = ({description}: {description: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    height: normalize(95),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: normalize(8),
    top: normalize(470),
    position: 'absolute',
    left: normalize(24),
  },

  title: {
    fontSize: normalize(16),
    fontFamily: 'Sora',
    fontWeight: 'semibold',
  },

  description: {
    fontSize: normalize(14),
    fontFamily: 'Sora',
    color: '#A2A2A2',
  },
});
