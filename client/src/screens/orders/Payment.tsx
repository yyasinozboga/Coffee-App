import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OrderType} from '../../types';
import normalize from '../../utils/helper';
import Wallet from '../../../assets/icons/Wallet';

const Payment = ({data}: {data: OrderType[]}) => {
  const total = data
    .reduce((acc, item) => acc + item.amount * item.price, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.paymentTop}>
        <View style={styles.wallet}>
          <Wallet />
          <View style={styles.walletText}>
            <Text style={styles.title}>Cash/Wallet</Text>
            <Text style={styles.price}>$ {total}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Order</Text>
      </Pressable>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    width: normalize(375),
    alignItems: 'center',
    gap: normalize(8),
    borderRadius: normalize(16),
    backgroundColor: 'white',
    height: normalize(165),
    paddingHorizontal: normalize(24),
    paddingTop: normalize(16),
    paddingBottom: normalize(46),
    position: 'absolute',
    bottom: 0,
  },

  paymentTop: {
    width: normalize(327),
    height: normalize(39),
    flexDirection: 'row',
    gap: normalize(117),
    alignItems: 'center',
  },

  wallet: {
    width: normalize(186),
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
  },

  walletText: {
    gap: normalize(4),
    width: normalize(150),
  },

  title: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(14),
    color: '#242424',
  },

  price: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(12),
    color: '#C67C4E',
  },

  button: {
    width: normalize(327),
    height: normalize(56),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    backgroundColor: '#C67C4E',
    borderRadius: normalize(16),
  },

  buttonText: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(16),
    color: 'white',
  },
});
