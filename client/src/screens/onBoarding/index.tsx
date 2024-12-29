import React from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {colors, screens} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const OnBoarding = ({navigation}: Props) => {
  StatusBar.setBarStyle('light-content');

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
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate(screens.Main)}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    width: 327,
    marginHorizontal: 'auto',
    paddingTop: 10,
  },

  title: {
    width: 327,
    color: 'white',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: 0.5,
    fontFamily: 'Sora',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },

  text: {
    width: 327,
    marginHorizontal: 'auto',
    textAlign: 'center',
    color: colors.gray,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: 'Sora',
  },

  button: {
    width: 327,
    height: 56,
    marginHorizontal: 'auto',
    backgroundColor: colors.brown,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sora',
    fontWeight: '500',
    textAlign: 'center',
  },
});
