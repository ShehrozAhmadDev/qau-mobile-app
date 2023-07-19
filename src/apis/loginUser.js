import api from '../services/axios';

export const loginUser = ({payload}) => {
  let url = '/user/login';
  return api.post(url, payload).then(({data}) => {
    return data;
  });
};
