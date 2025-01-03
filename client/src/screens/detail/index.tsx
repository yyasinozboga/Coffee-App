import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import React, {useCallback} from 'react';
import Header from '../../components/header';
import Heart from '../../../assets/icons/Heart';
import {useQuery} from '@tanstack/react-query';
import {getCoffee} from '../../api/verbs';
import {CoffeeDetailType, RootStackParamList} from '../../types';
// import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../components/loader';
import Error from '../../components/error';
import CoffeeImage from './Image';
import DetailCoffee from './DetailCoffee';
import Description from './Description';
import Size from './Size';
import Bottom from './Bottom';
import normalize from '../../utils/helper';
import {useFocusEffect} from '@react-navigation/native';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

// type RouteScreenProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail = ({route}: NavigationProps) => {
  // const {id} = useRoute<RouteScreenProp>().params;

  const {isPending, error, data} = useQuery<CoffeeDetailType>({
    queryKey: ['coffee'],
    queryFn: () => getCoffee(route.params.id),
  });

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        designs={{width: normalize(327)}}
        title="Detail"
        icon={
          <Heart fill="#2A2A2A" width={normalize(24)} height={normalize(24)} />
        }
      />
      {isPending ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <CoffeeImage image={data.image} />
          <DetailCoffee
            name={data.name}
            isHot={data.isHot}
            count={data.rating.count}
            avarage={data.rating.average}
          />
          <Description description={data.description} />
          <Size size={data.size} />
          <Bottom coffee={data} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Detail;
