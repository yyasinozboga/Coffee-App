import {StyleSheet, Text, View} from 'react-native';
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
    top: 375,
    width: 375,
  },

  container: {
    width: 327,
    position: 'absolute',
    left: 24,
    gap: 16,
  },
});
