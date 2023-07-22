import api from '../services/axios';

export const getUser = () => {
  let url = '/user/profile';
  return api.get(url).then(({data}) => {
    return data;
  });
};
