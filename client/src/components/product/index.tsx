import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import {OrderType, RootStackParamList} from '../../types';
import MinusCricle from '../../../assets/icons/MinusCricle';
import PlusCricle from '../../../assets/icons/PlusCricle';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  deleteProductFromOrders,
  updateProductFromOrders,
} from '../../api/verbs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {screens} from '../../utils/constants';
import Trash from '../../../assets/icons/Trash';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Product = ({coffee}: {coffee: OrderType}) => {
  const navigation = useNavigation<NavigationProps>();
  const {_id, id, image, name, category, amount} = coffee;
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationKey: ['orders'],
    mutationFn: (product: OrderType) => updateProductFromOrders(product),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ['orders'],
    mutationFn: (id: string) => deleteProductFromOrders(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });

  const handlePress = (type: string) => {
    if (type === 'decrease') {
      if (amount === 1) {
        deleteMutation.mutate(_id as string);
      } else {
        updateMutation.mutate({...coffee, amount: coffee.amount - 1});
      }
    } else {
      updateMutation.mutate({...coffee, amount: coffee.amount + 1});
    }
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(screens.Detail, {id})}
      style={styles.container}>
      <View style={styles.detail}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.detailRight}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>

      <View style={styles.addItem}>
        <Pressable onPress={() => handlePress('decrease')}>
          {amount === 1 ? (
            <Trash width={normalize(24)} height={normalize(24)} />
          ) : (
            <MinusCricle width={normalize(24)} height={normalize(24)} />
          )}
        </Pressable>
        <Text style={styles.amount}>{amount}</Text>
        <Pressable onPress={() => handlePress('increase')}>
          <PlusCricle width={normalize(24)} height={normalize(24)} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    height: normalize(54),
    flexDirection: 'row',
    gap: normalize(64),
    justifyContent: 'center',
    alignItems: 'center',
  },

  detail: {
    width: normalize(173),
    height: normalize(54),
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
  },

  image: {
    width: normalize(54),
    height: normalize(54),
    borderRadius: normalize(8),
  },

  detailRight: {
    gap: normalize(4),
    width: normalize(103),
    height: normalize(42),
  },

  name: {
    fontFamily: 'Sora',
    fontSize: normalize(16),
    fontWeight: 'semibold',
    color: '#242424',
  },

  category: {
    fontFamily: 'Sora',
    fontSize: normalize(12),
    fontWeight: 'regular',
    color: '#A2A2A2',
  },

  addItem: {
    width: normalize(90),
    height: normalize(24),
    flexDirection: 'row',
    gap: normalize(18),
    justifyContent: 'center',
    alignItems: 'center',
  },

  amount: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(14),
    color: '#2A2A2A',
  },
});
