import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import ArrowDown from '../../../assets/icons/ArrowDown';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../../../assets/icons/Search';
import Filter from '../../../assets/icons/Filter';

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
          <ArrowDown width={14} height={14} fill="#D8D8D8" />
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
          <Filter width={20} height={20} />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 280,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },

  locationContainer: {
    flexDirection: 'column',
    gap: 10,
    position: 'absolute',
    left: 24,
    top: 68,
  },

  location: {
    color: '#A2A2A2',
    fontFamily: 'Sora',
    fontSize: 12,
    letterSpacing: 1,
  },

  yourLocation: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  newYork: {
    color: '#D8D8D8',
    fontFamily: 'Sora',
    fontWeight: '700',
    fontSize: 14,
  },

  searchBar: {
    flexDirection: 'row',
    gap: 16,
    position: 'absolute',
    left: 24,
    top: 135,
  },

  search: {
    flexDirection: 'row',
    gap: 8,
    width: 259,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    height: 52,
  },

  searchCoffee: {
    color: '#A2A2A2',
    fontSize: 14,
    fontFamily: 'Sora',
  },

  filter: {
    backgroundColor: '#C67C4E',
    borderRadius: 12,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
