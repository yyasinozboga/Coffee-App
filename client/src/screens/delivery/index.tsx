import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Top from './Top';
import normalize from '../../utils/helper';
import Bike from '../../../assets/icons/Bike';
import DeliveryLocation from '../../../assets/icons/DeliveryLocation';
import Rute from '../../../assets/icons/Rute';
import DetailDriver from './DetailDriver';

const Delivery = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/Maps.png')}
        style={styles.map}
      />
      <Top />
      <View style={styles.driver}>
        <Bike width={normalize(24)} y={9} height={normalize(24)} />
      </View>
      <View style={styles.rute}>
        <Rute />
      </View>
      <View style={styles.location}>
        <DeliveryLocation />
      </View>
      <DetailDriver />
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  map: {
    height: normalize(812),
    width: normalize(375),
  },

  driver: {
    position: 'absolute',
    top: normalize(311),
    left: normalize(233),
    backgroundColor: 'white',
    padding: normalize(8),
    borderRadius: normalize(50),
    transform: [{scaleX: -1}],
    height: normalize(44),
    width: normalize(44),
    zIndex: 1,
  },

  rute: {
    position: 'absolute',
    top: normalize(168.5),
    left: normalize(81.5),
    width: normalize(170.5),
    height: normalize(142.5),
  },

  location: {
    position: 'absolute',
    top: normalize(211),
    left: normalize(66),
  },
});
