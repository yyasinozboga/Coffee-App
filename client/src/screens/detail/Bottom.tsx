import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CoffeeDetailType, OrderType, RootStackParamList} from '../../types';
import {screens} from '../../utils/constants';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addProductToOrders, getOrders} from '../../api/verbs';
import Button from '../../components/button';
import BottomContainer from '../../components/bottomContainer';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Bottom = ({coffee}: {coffee: CoffeeDetailType}) => {
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

      if (!found) {
        addMutation.mutate(order);
      }

      navigation.navigate(screens.Orders);
    }
  };

  return (
    <BottomContainer
      direction="row"
      gap={normalize(34)}
      height={normalize(118)}>
      <View style={styles.buttonLeft}>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <Button onPress={createOrder} text="Buy Now" width={normalize(217)} />
    </BottomContainer>
  );
};

export default Bottom;

const styles = StyleSheet.create({
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
