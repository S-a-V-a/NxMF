import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { NavBar } from './styled';

const Auth = React.lazy(() => import('auth/Module'));

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Invoice = React.lazy(() => import('invoice/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/invoice">Invoice</Link>
        </NavBar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
