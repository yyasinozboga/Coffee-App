import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Categories from './Categories';
import Products from './Products';

const ProductsArea = () => {
  return (
    <View style={styles.productsArea}>
      <View style={styles.container}>
        <Categories />
        <Products />
      </View>
    </View>
  );
};

export default ProductsArea;

const styles = StyleSheet.create({
  productsArea: {
    position: 'absolute',
    left: 0,
    width: 375,
    top: 375,
    height: '100%',
  },

  container: {
    position: 'absolute',
    width: 327,
    left: 24,
    gap: 16,
    height: '100%',
  },
});
