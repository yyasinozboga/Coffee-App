import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import GPS from '../../../assets/icons/Gps';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Top = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </Pressable>

      <Pressable>
        <GPS />
      </Pressable>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    height: normalize(44),
    flexDirection: 'row',
    gap: 'auto',
    position: 'absolute',
    top: normalize(68),
    left: normalize(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBtn: {
    borderRadius: normalize(12),
    padding: normalize(10),
    backgroundColor: '#EDEDED',
  },
});
