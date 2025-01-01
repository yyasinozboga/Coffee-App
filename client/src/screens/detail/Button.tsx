import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CoffeeDetailType, OrderType, RootStackParamList} from '../../types';
import {screens} from '../../utils/constants';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  addProductToOrders,
  getOrders,
  updateProductFromOrders,
} from '../../api/verbs';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Button = ({coffee}: {coffee: CoffeeDetailType}) => {
  const {_id, price, name, image, category} = coffee;
  const queryClient = useQueryClient();

  const navigation = useNavigation<NavigationProps>();
  const addMutation = useMutation({
    mutationKey: ['orders'],
    mutationFn: (product: OrderType) => addProductToOrders(product),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });

  const updateMutation = useMutation({
    mutationKey: ['orders'],
    mutationFn: (product: OrderType) => updateProductFromOrders(product),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });

  const {data} = useQuery<OrderType[]>({
    queryKey: ['orders'],
    queryFn: () => getOrders(),
  });

  const createOrder = () => {
    const order: OrderType = {
      id: _id,
      name,
      category,
      price,
      amount: 1,
      image,
    };
    if (data) {
      const found = data.find(item => item.id === _id);

      if (found) {
        const newOrder: OrderType = {...found, amount: found.amount + 1};
        updateMutation.mutate(newOrder);
      } else {
        addMutation.mutate(order);
      }

      navigation.navigate(screens.Orders);
    }
  };

  return (
    <View style={styles.button}>
      <View style={styles.buttonLeft}>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <Pressable style={styles.buttonRight} onPress={createOrder}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: normalize(375),
    height: normalize(118),
    flexDirection: 'row',
    gap: normalize(34),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(16),
    paddingBottom: normalize(46),
    borderTopStartRadius: normalize(20),
    borderTopEndRadius: normalize(20),
    position: 'absolute',
    left: 0,
    top: normalize(694),
    backgroundColor: 'white',
  },

  buttonLeft: {
    gap: normalize(4),
    width: normalize(76),
    height: normalize(48),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: 'Sora',
    fontSize: normalize(14),
    fontWeight: 'regular',
    color: '#909090',
  },

  price: {
    fontFamily: 'Sora',
    fontSize: normalize(18),
    fontWeight: 'semibold',
    color: '#C67C4E',
  },

  buttonRight: {
    width: normalize(217),
    height: normalize(56),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(16),
    backgroundColor: '#C67C4E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(16),
  },

  buttonText: {
    fontFamily: 'Sora',
    fontWeight: 'semibold',
    fontSize: normalize(16),
    color: 'white',
  },
});
