import {SafeAreaView, StatusBar} from 'react-native';
import React, {useCallback} from 'react';
import Header from './Header';
import Banner from './Banner';
import ProductsArea from './productsArea';
import {useFocusEffect} from '@react-navigation/native';

const Home = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Banner />
      <ProductsArea />
    </SafeAreaView>
  );
};

export default Home;
