import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  useAnimatedValue,
  View,
} from 'react-native';
import React, {useState} from 'react';
import normalize from '../../utils/helper';

const Type = () => {
  const [type, setType] = useState('deliver');
  const typeAnim = useAnimatedValue(4);
  const deliveryColor = type === 'deliver' ? 'white' : '#242424';
  const pickUpColor = type === 'pick-up' ? 'white' : '#242424';

  const handlePress = (param: string) => {
    setType(param);

    if (type === 'deliver') {
      Animated.timing(typeAnim, {
        toValue: normalize(327 - 4 - 153),
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(typeAnim, {
        toValue: normalize(4),
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, styles.type, {left: typeAnim}]} />

      <Pressable style={styles.button} onPress={() => handlePress('deliver')}>
        <Text style={[styles.text, {color: deliveryColor}]}>Deliver</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handlePress('pick-up')}>
        <Text style={[styles.text, {color: pickUpColor}]}>Pick Up</Text>
      </Pressable>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    height: normalize(43),
    left: normalize(24),
    backgroundColor: '#EDEDED',
    borderRadius: normalize(12),
    flexDirection: 'row',
    padding: normalize(4),
    justifyContent: 'space-between',
  },

  button: {
    width: normalize(153),
    height: normalize(35),
    borderRadius: normalize(8),
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    fontWeight: 'semibold',
  },

  type: {
    backgroundColor: '#C67C4E',
    position: 'absolute',
    top: normalize(4),
  },
});
