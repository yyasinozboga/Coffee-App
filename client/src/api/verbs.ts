import api from './instance';

export const getAllCoffees = () => api.get('/coffees').then(res => res.data);
