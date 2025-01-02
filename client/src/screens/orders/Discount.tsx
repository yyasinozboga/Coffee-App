import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import DiscountIcon from '../../../assets/icons/DiscountIcon';
import ArrowRight from '../../../assets/icons/ArrowRight';

const Discount = ({count}: {count: number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.discountLeft}>
        <DiscountIcon
          fill="#C67C4E"
          width={normalize(24)}
          height={normalize(24)}
        />
        <Text style={styles.text}>{count} Discount is Applies</Text>
      </View>

      <ArrowRight width={normalize(20)} height={normalize(20)} />
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    height: normalize(56),
    left: normalize(24),
    flexDirection: 'row',
    gap: normalize(90),
    alignItems: 'center',
    borderRadius: normalize(16),
    borderColor: '#EDEDED',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: normalize(16),
  },

  discountLeft: {
    width: normalize(185),
    height: normalize(21),
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(14),
    color: '#313131',
  },
});
