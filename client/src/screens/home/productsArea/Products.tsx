import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../../../components/card';
import {CoffeeType} from '../../../types';
import normalize from '../../../utils/helper';

const Products = ({data}: {data: CoffeeType[]}) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      contentContainerStyle={{
        gap: normalize(20),
        paddingBottom: normalize(375),
      }}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({item}) => <Card coffee={item} />}
      keyExtractor={item => item._id}
      showsVerticalScrollIndicator={false}
      style={{height: '100%'}}
    />
  );
};

export default Products;

const styles = StyleSheet.create({});
