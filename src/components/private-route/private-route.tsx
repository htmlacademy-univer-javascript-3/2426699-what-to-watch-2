import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component }: { component: React.ReactNode }) => {
  const isUserAuthenticated = false; 

  return isUserAuthenticated ? (
    <Route element={component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
