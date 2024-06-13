import loginAxios from '../apiLogin';
import process from 'process';
import { useMutation } from 'react-query';

interface ILoginData {
  password: string;
  username: string;
}

const loginQuery = async (data: ILoginData) => {
  const { username, password } = data;
  const response = await loginAxios.post('/access_token', {
    grant_type: 'password',
    client_id: process.env.NX_PUBLIC_CLIENT_ID,
    client_secret: process.env.NX_PUBLIC_CLIENT_SECRET,
    username,
    password,
    mfa_token: '',
    scope: 'openid',
  });
  return response.data;
};

export function useLogin() {
  const mutation = useMutation(loginQuery, {
    onSuccess: (response) => {
      localStorage.setItem('token', response.access_token);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutation;
}
