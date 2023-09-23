import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../context/AuthContext';
import UserForm from '../forms/UserForm'; 
const Layout = () => {
  const { authenticated } = useAuth();
  console.log("inside layout", authenticated)
  return (
    <div className="layout">
      {authenticated ? (
        <>
          <Navbar />
          <Sidebar />
        
          <div className="content">
            <Outlet /> 
          </div>
        </>
      ) : (
        <div className="content">
          <UserForm /> 
        </div>
      )}
    </div>
  );
};

export default Layout;
