import React from 'react';
import { Link } from 'react-router-dom';
import { userStatusData, userStatusStatus } from '../../store/auth/auth-selectors';
import { useAppSelector } from '../../hooks/stores';
import { useCallback } from 'react';
import { logout } from '../../store/api-actions/api-actions';
import { useAppDispatch } from '../../hooks/stores';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Logo from '../logo/logo';
import { AuthorizationStatus } from '../../types/api';
import { TUser } from '../../types/user';

import { authorizationStatusStatus } from '../../store/auth/auth-selectors';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  isLoginPage?: boolean;
}

const UserBlockComponent: React.FC<HeaderProps> = ({
  children,
  className = '',
  isLoginPage = false,
}) => {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(userStatusStatus);
  const user = useAppSelector(userStatusData);
  const hasAccess = authorizationStatus !== null;

  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  const loginLogoutButton = useMemo(
    () =>
      hasAccess ? (
        <Link
          to={'/'}
          onClick={handleClick}
          className="user-block__link"
        >
          Sign out
        </Link>
      ) : (
        <Link to={'/login'} className="user-block__link">
          Sign in
        </Link>
      ),
    [handleClick, hasAccess]
  );

  return (
    <header className={`page-header ${className}`}>
      <Logo />

      {children}

      {!isLoginPage && (
        <ul className="user-block">
          {hasAccess && (
            <li className="user-block__item">
              <Link to={'/mylist'}>
                <div className="user-block__avatar">
                  <img
                    src={user?.avatarUrl}
                    alt={user?.name}
                    width={60}
                    height={60}
                  />
                </div>
              </Link>
            </li>
          )}
          <li className="user-block__item">{loginLogoutButton}</li>
        </ul>
      )}
    </header>
  );
};

export const UserBlock = React.memo(UserBlockComponent);