import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import normalize from '../../utils/helper';
import Type from './Type';
import Address from './Address';
import {useQuery} from '@tanstack/react-query';
import {getOrders} from '../../api/verbs';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Product from '../../components/product';
import {OrderType} from '../../types';

const Orders = () => {
  const {isPending, error, data} = useQuery<OrderType[]>({
    queryKey: ['orders'],
    queryFn: () => getOrders(),
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Orders" designs={{width: normalize(188)}} />
      {isPending ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <Type />
            <Address />
            <View style={styles.products}>
              <FlatList
                data={data}
                renderItem={({item}) => <Product coffee={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          </>
        )
      )}
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  products: {
    position: 'absolute',
    left: normalize(24),
    top: normalize(352),
    width: normalize(327),
  },
});
