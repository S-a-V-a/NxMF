import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth',

  exposes: {
    './Module': './src/remote-entry.ts',
    './AuthProvider': './src/context/AuthContext/index',
    './UseAuth': './src/context/AuthContext/useAuth',
  },
};

export default config;
