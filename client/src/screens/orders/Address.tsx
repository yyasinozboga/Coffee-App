import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import Edit from '../../../assets/icons/Edit';
import Notes from '../../../assets/icons/Notes';

const Address = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addressTop}>
        <Text style={styles.title}>Delivery Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.newYork}>New York</Text>
          <Text style={styles.address}>
            123 Main Street, Apt 5B New York, NY 10001.
          </Text>
        </View>
      </View>

      <View style={styles.edit}>
        <Pressable style={[styles.editButton, {width: normalize(120)}]}>
          <Edit width={normalize(14)} height={normalize(14)} />
          <Text style={styles.editText}>Edit Address</Text>
        </Pressable>

        <Pressable style={[styles.editButton, {width: normalize(101)}]}>
          <Notes width={normalize(14)} height={normalize(14)} />
          <Text style={styles.editText}>Add Note</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    width: normalize(315),
    height: normalize(121),
    left: normalize(24),
    gap: normalize(16),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  addressTop: {
    height: normalize(79),
    gap: normalize(16),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    fontWeight: 'semibold',
    color: '#242424',
  },

  addressContainer: {
    gap: normalize(4),
    height: normalize(39),
  },

  newYork: {
    fontFamily: 'Sora',
    fontSize: normalize(14),
    fontWeight: 'semibold',
    color: '#313131',
  },

  address: {
    fontFamily: 'Sora',
    fontSize: normalize(12),
    fontWeight: 'regular',
    color: '#A2A2A2',
  },

  edit: {
    flexDirection: 'row',
    width: normalize(229),
    height: normalize(26),
    gap: normalize(8),
  },

  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(4),
    height: normalize(26),
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: normalize(16),
    borderColor: '#A2A2A2',
    borderWidth: 1,
  },

  editText: {
    fontFamily: 'Sora',
    fontSize: normalize(12),
    fontWeight: 'regular',
    color: '#313131',
  },
});
