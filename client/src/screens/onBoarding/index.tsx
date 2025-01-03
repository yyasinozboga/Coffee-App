import React, {useCallback} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {colors, screens} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import normalize from '../../utils/helper';
import Button from '../../components/button';
import {useFocusEffect} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const OnBoarding = ({navigation}: Props) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#050505'}}>
      <Image
        source={require('../../../assets/images/ImageOnboarding.png')}
        style={{width: '100%', height: 450}}
      />

      <LinearGradient
        colors={['#050505', '#050505']}
        locations={[0.25, 0.75]}
        start={{x: 0.25, y: 0}}
        end={{x: 0.75, y: 0}}
        style={{height: 360}}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text style={styles.text}>
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
          <Button
            onPress={() => navigation.navigate(screens.Main)}
            width={normalize(327)}
            text="Get Started"
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: normalize(20),
    width: normalize(327),
    marginHorizontal: 'auto',
    paddingTop: normalize(10),
  },

  title: {
    width: normalize(327),
    color: 'white',
    fontWeight: '600',
    fontSize: normalize(32),
    lineHeight: normalize(48),
    letterSpacing: 0.5,
    fontFamily: 'Sora',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },

  text: {
    width: normalize(327),
    marginHorizontal: 'auto',
    textAlign: 'center',
    color: colors.gray,
    fontWeight: '400',
    fontSize: normalize(14),
    letterSpacing: 1,
    fontFamily: 'Sora',
  },

  button: {
    width: normalize(327),
    height: normalize(56),
    marginHorizontal: 'auto',
    backgroundColor: colors.brown,
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: normalize(16),
    fontFamily: 'Sora',
    fontWeight: '500',
    textAlign: 'center',
  },
});
