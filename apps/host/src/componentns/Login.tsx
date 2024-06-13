import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAuth from 'auth/UseAuth';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 15px;
`;

const Login = () => {
  const [username, setUsername] = useState<string>('demodev');
  const [password, setPassword] = useState<string>('Demodev123456');
  const { isLoading, logout, login } = useAuth();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    login({ username, password });
  };

  const handleRemoveToken = () => {
    logout();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={'username'}
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder={'password'}
        value={password}
        onChange={handlePasswordChange}
      />
      <button type={'submit'}>{isLoading ? 'Loading...' : 'Submit'}</button>
      <button type={'button'} onClick={handleRemoveToken}>
        Remove token
      </button>
    </Form>
  );
};

export default Login;
