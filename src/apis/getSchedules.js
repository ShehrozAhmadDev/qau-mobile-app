import api from '../services/axios';

export const getSchedules = () => {
  let url = '/schedule/';
  return api.get(url).then(({data}) => {
    return data;
  });
};
