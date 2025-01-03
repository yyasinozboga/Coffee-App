import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Star from '../../../assets/icons/Star';
import Bike from '../../../assets/icons/Bike';
import Bean from '../../../assets/icons/Bean';
import Milk from '../../../assets/icons/Milk';
import normalize from '../../utils/helper';

type Props = {
  name: string;
  isHot: string;
  count: number;
  avarage: number;
};

const DetailCoffee = ({name, isHot, count, avarage}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <View style={styles.detailLeft}>
          <View style={styles.text}>
            <Text numberOfLines={2} style={styles.name}>
              {name}
            </Text>
            <Text style={styles.isHot}>{isHot}</Text>
          </View>
          <View style={styles.rating}>
            <Star width={normalize(20)} height={normalize(20)} />
            <Text style={styles.avarage}>{avarage}</Text>
            <Text style={styles.count}>({count})</Text>
          </View>
        </View>

        <View style={styles.superiority}>
          <View style={styles.box}>
            <Bike width={normalize(40)} height={normalize(40)} />
          </View>
          <View style={styles.box}>
            <Bean width={normalize(40)} height={normalize(40)} />
          </View>
          <View style={styles.box}>
            <Milk width={normalize(40)} height={normalize(40)} />
          </View>
        </View>
      </View>

      <View style={styles.line} />
    </View>
  );
};

export default DetailCoffee;

const styles = StyleSheet.create({
  container: {
    gap: normalize(16),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: normalize(327),
    height: normalize(100),
    position: 'absolute',
    top: normalize(354),
    left: normalize(24),
  },

  detail: {
    height: normalize(84),
    gap: normalize(42),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  detailLeft: {
    width: normalize(129),
    gap: normalize(16),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  text: {
    gap: normalize(4),
  },

  name: {
    fontSize: normalize(20),
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    color: '#242424',
  },

  isHot: {
    fontFamily: 'Sora',
    fontSize: normalize(12),
    fontWeight: 'regular',
    color: '#A2A2A2',
  },

  rating: {
    flexDirection: 'row',
    gap: normalize(4),
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  avarage: {
    color: '#2A2A2A',
    fontFamily: 'Sora',
  },

  count: {
    color: '#A2A2A2',
    fontFamily: 'Sora',
  },

  superiority: {
    flexDirection: 'row',
    gap: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(156),
    height: normalize(44),
  },

  box: {
    padding: normalize(6),
    flexDirection: 'row',
    gap: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(44),
    height: normalize(44),
    backgroundColor: '#EDEDED',
    borderRadius: normalize(12),
  },

  line: {
    width: normalize(295),
    height: 1,
    backgroundColor: '#E3E3E3',
  },
});
