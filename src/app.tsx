import { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/home';

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
      
    </Routes>
  );
}

export default App;
