import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/layouts/Layout';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap your app with AuthProvider */}
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;

