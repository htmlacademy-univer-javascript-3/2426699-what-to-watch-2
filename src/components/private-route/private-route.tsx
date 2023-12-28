import { FC, ReactElement, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/stores.ts';
import { authorizationStatusData } from '../../store/auth/auth-selectors.ts';

interface IPrivateRouteProps {
  children: ReactElement;
  redirectPath?: string;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children, redirectPath = '/login' }) => {
  const isAuth = useAppSelector(authorizationStatusData);

  const memoizedIsAuth = useMemo(() => isAuth, [isAuth]);

  return memoizedIsAuth ? children : <Navigate to={redirectPath} replace />;
};
