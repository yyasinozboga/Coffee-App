import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OrderType} from '../../types';
import normalize from '../../utils/helper';

const PaymentSummary = ({data}: {data: OrderType[]}) => {
  const total = data.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>
      <View style={styles.detail}>
        <View style={styles.box}>
          <Text style={styles.leftTitle}>Price</Text>
          <Text style={styles.total}>${total}</Text>
        </View>
        <View style={[styles.box, {gap: normalize(157)}]}>
          <Text style={styles.leftTitle}>Delivery Free</Text>
          <View style={styles.deliveryFree}>
            <Text
              style={[
                styles.total,
                {fontWeight: 'regular', textDecorationLine: 'line-through'},
              ]}>
              $2.0
            </Text>
            <Text style={styles.total}>$1.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    height: normalize(93),
    gap: normalize(16),
    left: normalize(24),
    marginTop: normalize(10),
  },

  title: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(16),
    color: '#242424',
  },

  detail: {
    height: normalize(50),
    gap: normalize(8),
  },

  box: {
    height: normalize(21),
    flexDirection: 'row',
    gap: normalize(247),
    alignItems: 'center',
  },

  leftTitle: {
    fontFamily: 'Sora',
    fontSize: normalize(14),
    fontWeight: 'regular',
    color: '#313131',
  },

  total: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(14),
    color: '#242424',
  },

  deliveryFree: {
    flexDirection: 'row',
    gap: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(77),
  },
});
