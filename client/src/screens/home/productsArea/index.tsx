import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Categories from './Categories';
import Products from './Products';
import {useMutation} from '@tanstack/react-query';
import {getAllCoffees} from '../../../api/verbs';
import Loader from '../../../components/loader';
import Error from '../../../components/error';
import normalize from '../../../utils/helper';

const ProductsArea = () => {
  const {mutate, isPending, error, data} = useMutation({
    mutationKey: ['coffees'],
    mutationFn: (params: {category: string}) => getAllCoffees(params),
  });

  useEffect(() => {
    mutate({category: ''});
  }, []);

  return (
    <View style={styles.productsArea}>
      <View style={styles.container}>
        <Categories mutate={mutate} />
        <View style={{height: '100%'}}>
          {isPending ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            data && <Products data={data} />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductsArea;

const styles = StyleSheet.create({
  productsArea: {
    position: 'absolute',
    left: 0,
    width: normalize(375),
    top: normalize(375),
    height: '100%',
  },

  container: {
    position: 'absolute',
    width: normalize(327),
    left: normalize(24),
    gap: normalize(16),
    height: '100%',
  },
});
