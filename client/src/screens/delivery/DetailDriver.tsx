import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomContainer from '../../components/bottomContainer';
import normalize from '../../utils/helper';
import Bike from '../../../assets/icons/Bike';
import Calling from '../../../assets/icons/Calling';

const DetailDriver = () => {
  return (
    <BottomContainer height={normalize(322)}>
      <View style={styles.indicator} />

      <View style={styles.detailTop}>
        <Text style={styles.minutes}>10 minutes left</Text>
        <Text style={styles.text}>
          Delivery to <Text style={{color: '#242424'}}>JL. Kpg Stuyo</Text>{' '}
        </Text>
      </View>

      <View style={styles.status}>
        <View style={styles.statusItem} />
        <View style={styles.statusItem} />
        <View style={styles.statusItem} />
        <View style={[styles.statusItem, {backgroundColor: '#E3E3E3'}]} />
      </View>

      <View style={styles.detailCenter}>
        <View style={styles.detailCenterIcon}>
          <Bike width={normalize(44)} bottom={5} height={normalize(44)} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Delivered your order</Text>
          <Text style={styles.text}>
            We will deliver your goods to you in the shortes possible time
          </Text>
        </View>
      </View>

      <View style={styles.driver}>
        <View style={styles.driverProfile}>
          <Image
            source={require('../../../assets/images/Profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.title}>Brooklyn Simmons</Text>
            <Text style={styles.text}>Personal Courier</Text>
          </View>
        </View>

        <Pressable style={styles.call}>
          <Calling />
        </Pressable>
      </View>
    </BottomContainer>
  );
};

export default DetailDriver;

const styles = StyleSheet.create({
  indicator: {
    height: normalize(5),
    borderRadius: normalize(16),
    top: normalize(16),
    left: normalize(165),
    backgroundColor: '#E3E3E3',
    width: normalize(45),
    position: 'absolute',
  },

  detailTop: {
    width: normalize(157),
    height: normalize(44),
    gap: normalize(2),
    alignItems: 'center',
    position: 'absolute',
    left: normalize(109),
    top: normalize(36),
  },

  minutes: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    fontWeight: 'semibold',
    color: '#242424',
  },

  text: {
    fontFamily: 'Sora',
    fontSize: normalize(12),
    color: '#D3D3D3',
  },

  status: {
    flexDirection: 'row',
    gap: normalize(10),
    width: normalize(315),
    height: normalize(4),
    position: 'absolute',
    top: normalize(105),
    left: normalize(30),
  },

  statusItem: {
    width: normalize(71.25),
    height: normalize(4),
    borderRadius: normalize(20),
    backgroundColor: '#36C07E',
  },

  detailCenter: {
    width: normalize(327),
    height: normalize(77),
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
    paddingVertical: normalize(8),
    paddingLeft: normalize(12),
    paddingRight: normalize(16),
    borderRadius: normalize(12),
    position: 'absolute',
    top: normalize(125),
    left: normalize(24),
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },

  detailCenterIcon: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(12),
    borderWidth: 1,
    borderColor: '#E3E3E3',
    position: 'absolute',
    left: normalize(12),
    top: normalize(10.5),
  },

  textContainer: {
    gap: normalize(4),
    width: normalize(243),
    height: normalize(61),
    position: 'absolute',
    top: normalize(8),
    left: normalize(84),
  },

  title: {
    fontFamily: 'Sora',
    fontSize: normalize(14),
    fontWeight: 'semibold',
    color: '#242424',
  },

  driver: {
    width: normalize(327),
    height: normalize(56),
    flexDirection: 'row',
    gap: normalize(76),
    alignItems: 'center',
    position: 'absolute',
    top: normalize(216),
    left: normalize(24),
  },

  driverProfile: {
    width: normalize(207),
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
  },

  profileImage: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(14),
  },

  profileInfo: {
    width: normalize(135),
    gap: normalize(4),
  },

  call: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: normalize(12),
    width: normalize(44),
    height: normalize(44),
    position: 'absolute',
    top: normalize(6),
    left: normalize(283),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
