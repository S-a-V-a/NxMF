import { createContext, FC, ReactNode, useState } from 'react';
import { useLogin } from '../../api/react-query/login';

interface ILoginData {
  username: string;
  password: string;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  isAuth: boolean;
  login: ({ username, password }: ILoginData) => void;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutateLogin = useLogin();

  const login = async ({ username, password }: ILoginData) => {
    setIsAuth(true);
    setIsLoading(true);
    try {
      await mutateLogin.mutateAsync({ username, password });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('token', '');
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
