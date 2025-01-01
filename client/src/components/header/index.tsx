import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';
import normalize from '../../utils/helper';

type Props = {
  title?: string;
  icon?: ReactElement;
  location?: boolean;
  designs: object;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Header = ({title, icon, location, designs}: Props) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={[styles.header, designs]}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft width={normalize(24)} height={normalize(24)} />
      </Pressable>
      <Text>{title}</Text>
      {icon && <Pressable>{icon}</Pressable>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: normalize(24),
    top: normalize(68),
    height: normalize(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    color: '#242424',
    fontWeight: 'semibold',
  },
});
