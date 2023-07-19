import api from '../services/axios';

export const getUpdates = () => {
  let url = '/update/';
  return api.get(url).then(({data}) => {
    return data;
  });
};
