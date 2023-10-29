import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component }: { component: React.ReactNode }) => {
  const isUserAuthenticated = false; // TODO Далее нужно будет заменить проверку авторизации пользователя

  return isUserAuthenticated ? (
    <Route element={component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
