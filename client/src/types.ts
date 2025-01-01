import {screens} from './utils/constants';

export type RootStackParamList = {
  [screens.OnBoarding]: undefined;
  [screens.Main]: undefined;
  [screens.Detail]: {id: string};
  [screens.Delivery]: undefined;
  [screens.Orders]: undefined;
};

export type RootTabParamList = {
  [screens.Home]: undefined;
  [screens.Likes]: undefined;
  [screens.Orders]: undefined;
  [screens.Notifications]: undefined;
};

export type CoffeeType = {
  rating: {
    average: number;
    count: number;
  };
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
};

export type CoffeeDetailType = {
  _id: string;
  name: string;
  category: string;
  price: number;
  size: string[];
  rating: {
    average: number;
    count: number;
  };
  isHot: string;
  description: string;
  image: string;
};

export type OrderType = {
  _id?: string;
  id: string;
  name: string;
  category: string;
  price: number;
  amount: number;
  image: string;
};
