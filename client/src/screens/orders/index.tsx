import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
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
import Discount from './Discount';
import PaymentSummary from './PaymentSummary';
import Payment from './Payment';
import {useFocusEffect} from '@react-navigation/native';

const Orders = () => {
  const {isPending, error, data} = useQuery<OrderType[]>({
    queryKey: ['orders'],
    queryFn: () => getOrders(),
  });

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

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
            <View
              style={{
                position: 'absolute',
                top: normalize(132),
                bottom: normalize(180),
              }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  gap: normalize(20),
                }}>
                <Type />
                <Address />
                <View style={styles.line} />
                <View style={styles.products}>
                  <FlatList
                    data={data}
                    contentContainerStyle={{gap: 10}}
                    renderItem={({item}) => <Product coffee={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                  />
                </View>
                <View style={styles.yellowLine} />
                <Discount count={data.length} />
                <PaymentSummary data={data} />
              </ScrollView>
            </View>
            <Payment data={data} />
          </>
        )
      )}
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {},

  products: {
    left: normalize(24),
    width: normalize(327),
  },

  line: {
    width: normalize(295),
    left: normalize(40),
    backgroundColor: '#E3E3E3',
    height: 1,
  },

  yellowLine: {
    width: normalize(375),
    height: normalize(4),
    backgroundColor: '#F9F2ED',
  },
});
