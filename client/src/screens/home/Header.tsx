import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import ArrowDown from '../../../assets/icons/ArrowDown';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../../../assets/icons/Search';
import Filter from '../../../assets/icons/Filter';
import normalize from '../../utils/helper';

const Header = () => {
  return (
    <LinearGradient
      colors={['#313131', '#111111']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      locations={[0, 1]}
      style={styles.header}>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>Location</Text>
        <View style={styles.yourLocation}>
          <Text style={styles.newYork}>New York</Text>
          <ArrowDown
            width={normalize(14)}
            height={normalize(14)}
            fill="#D8D8D8"
          />
        </View>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.search}>
          <Search width={20} height={20} />
          <TextInput
            placeholder="Search Coffee"
            style={styles.searchCoffee}
            placeholderTextColor="#A2A2A2"
          />
        </View>

        <Pressable style={styles.filter}>
          <Filter width={normalize(20)} height={normalize(20)} />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: normalize(280),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },

  locationContainer: {
    flexDirection: 'column',
    gap: normalize(10),
    position: 'absolute',
    left: normalize(24),
    top: normalize(68),
  },

  location: {
    color: '#A2A2A2',
    fontFamily: 'Sora',
    fontSize: normalize(12),
    letterSpacing: 1,
  },

  yourLocation: {
    gap: normalize(4),
    flexDirection: 'row',
    alignItems: 'center',
  },

  newYork: {
    color: '#D8D8D8',
    fontFamily: 'Sora',
    fontWeight: '700',
    fontSize: normalize(14),
  },

  searchBar: {
    flexDirection: 'row',
    gap: normalize(16),
    position: 'absolute',
    left: normalize(24),
    top: normalize(135),
  },

  search: {
    flexDirection: 'row',
    gap: normalize(8),
    width: normalize(259),
    padding: normalize(16),
    borderRadius: normalize(12),
    backgroundColor: '#2A2A2A',
    height: normalize(52),
  },

  searchCoffee: {
    color: '#A2A2A2',
    fontSize: normalize(14),
    fontFamily: 'Sora',
  },

  filter: {
    backgroundColor: '#C67C4E',
    borderRadius: normalize(12),
    width: normalize(52),
    height: normalize(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
