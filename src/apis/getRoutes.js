import api from '../services/axios';

export const getRoutes = () => {
  let url = '/route/';
  return api.get(url).then(({data}) => {
    return data;
  });
};
