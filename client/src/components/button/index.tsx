import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';

type Props = {
  text: string;
  onPress: () => void;
  width: number;
};

const Button = ({text, onPress, width}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, {width: width}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: normalize(56),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    backgroundColor: '#C67C4E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(16),
  },

  text: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(16),
    color: 'white',
  },
});
