import api from '../services/axios';

export const signUpUser = ({payload}) => {
  let url = '/user/register';
  return api.post(url, payload).then(({data}) => {
    return data;
  });
};
