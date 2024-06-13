import baseAxios from '../apiBase';
import { useQuery } from 'react-query';

const handleGetData = () => {
  baseAxios.get('/auth/rbac/me/permissions').then((res) => {
    console.log(res.data);
  });
};

function useGetPermissions() {
  return useQuery('permissions', handleGetData);
}
