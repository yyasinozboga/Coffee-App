import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import Header from './Header';
import Banner from './Banner';
import ProductsArea from './productsArea';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Banner />
      <ProductsArea />
    </SafeAreaView>
  );
};

export default Home;
