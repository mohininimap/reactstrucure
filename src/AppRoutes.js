// import React from 'react';
// import { Route, Routes,Navigate } from 'react-router-dom';
// import Home from './pages/home/Home';
// import Login from './components/forms/UserForm';
// import { useAuth } from './context/AuthContext';

// const AppRoutes = () => {
//   const { authenticated } = useAuth();

//   return (
//     <Routes>
//       {!authenticated ? (
//         <Route path="/" element={<Login />} /> 
//       ) : (
//         <Route path="/home" element={<Home />} />
//       )}

//       <Route path="*" element={<Navigate to="/login" />} /> 
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from 'react';
import { Route, Routes,Navigate} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './components/forms/UserForm'; // Import your UserForm component
import { useAuth } from './context/AuthContext';
import Layout from './components/layouts/Layout';

const AppRoutes = () => {
  const { authenticated } = useAuth();
  return (
    <Routes>
      {!authenticated && (
        <Route path="/login" element={<Login />} /> // Display UserForm when not authenticated
      )}

      {authenticated && (
        // <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Layout/>} /> 
      )}

      <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login if no matching routes */}
  
    </Routes>
  );
};

export default AppRoutes;

