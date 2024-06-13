import React from 'react';
import baseAxios from '../../api/apiBase';
import { useQuery } from 'react-query';
import Login from '../../componentns/Login';

const fetchPermissions = () => {
  baseAxios.get('/auth/rbac/me/permissions').then((res) => {
    console.log(res.data);
  });
};

const Home = () => {
  const { data, refetch } = useQuery('permissions', fetchPermissions, {
    enabled: false,
  });

  const handleGetData = () => {
    refetch();
  };
  console.log(data);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleGetData}>GetData</button>
      <Login />
    </div>
  );
};

export default Home;
