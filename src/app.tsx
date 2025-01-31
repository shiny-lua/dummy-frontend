import { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';

function App() {
  return (
      <MainRoutes />
  );
}

function MainRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />}  
      />
      <Route 
        path="/signin" 
        element={<Signin />} 
      />
      <Route 
        path="/signup" 
        element={<Signup />} 
      />
    </Routes>
  );
}

export default App;
