import {screens} from './utils/constants';

export type RootStackParamList = {
  [screens.OnBoarding]: undefined;
  [screens.Main]: undefined;
  [screens.Detail]: {id: string};
  [screens.Delivery]: undefined;
};

export type RootTabParamList = {
  [screens.Home]: undefined;
  [screens.Likes]: undefined;
  [screens.Orders]: undefined;
  [screens.Notifications]: undefined;
};
