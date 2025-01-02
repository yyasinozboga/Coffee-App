import {CoffeeDetailType, CoffeeType, OrderType} from '../types';
import api from './instance';
import {COFFEES_URL, ORDERS_URL} from './urls';

export const getAllCoffees = (params?: {
  category: string;
}): Promise<CoffeeType[]> =>
  api.get(COFFEES_URL, {params}).then(res => res.data);

export const getCoffee = (id: string): Promise<CoffeeDetailType> =>
  api.get(`${COFFEES_URL}/${id}`).then(res => res.data);

export const getOrders = (): Promise<OrderType[]> =>
  api.get(ORDERS_URL).then(res => res.data);

export const addProductToOrders = (product: OrderType) =>
  api.post(ORDERS_URL, product).then(res => res.data);

export const updateProductFromOrders = (
  product: OrderType,
): Promise<OrderType> =>
  api.patch(`${ORDERS_URL}/${product._id}`, product).then(res => res.data);

export const deleteProductFromOrders = (id: string) =>
  api.delete(`${ORDERS_URL}/${id}`);
