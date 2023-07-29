import api from '../services/axios';

export const planTrip = tripData => {
  let url = '/trip/getPath';
  return api.post(url, tripData).then(({data}) => {
    return data;
  });
};
