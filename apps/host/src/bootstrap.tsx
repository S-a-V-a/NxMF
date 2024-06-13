import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from 'auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
