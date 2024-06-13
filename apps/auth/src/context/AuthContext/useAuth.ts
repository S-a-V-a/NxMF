import { useContext } from 'react';
import { AuthContext, IAuthContext } from './index';

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used in AuthProvider');
  }

  return context;
};

export default useAuth;
