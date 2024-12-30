import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getAllCoffees} from '../../../api/verbs';
import Card from '../../../components/card';
import Loader from '../../../components/loader';
import Error from '../../../components/error';
import {CoffeeType} from '../../../types';

const Products = () => {
  const {isPending, error, data} = useQuery<CoffeeType[]>({
    queryKey: ['coffees'],
    queryFn: () => getAllCoffees(),
  });

  return (
    <View style={{height: '100%'}}>
      {isPending ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <FlatList
            numColumns={2}
            data={data}
            contentContainerStyle={{
              gap: 20,
              paddingBottom: 375,
            }}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => <Card coffee={item} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            style={{height: '100%'}}
          />
        )
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
