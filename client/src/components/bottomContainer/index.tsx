import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';
import normalize from '../../utils/helper';

type Props = {
  children: React.ReactNode;
  height: number;
  direction?: 'column' | 'row';
  gap?: number;
};

const BottomContainer = ({children, height, direction, gap}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {height: height, gap: gap, flexDirection: direction},
      ]}>
      {children}
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  container: {
    width: normalize(375),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(16),
    paddingBottom: normalize(46),
    borderTopStartRadius: normalize(20),
    borderTopEndRadius: normalize(20),
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
});
