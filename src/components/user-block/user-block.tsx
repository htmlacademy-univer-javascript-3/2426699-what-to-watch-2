import React from 'react';
import { Link } from 'react-router-dom';
import { userStatusData} from '../../store/auth/auth-selectors';
import { useAppSelector } from '../../hooks/stores';
import { useCallback } from 'react';
import { logout } from '../../store/api-actions/api-actions';
import { useAppDispatch } from '../../hooks/stores';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Logo from '../logo/logo';


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
  const user = useAppSelector(userStatusData);
  const isUser = user;

  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  const loginLogoutButton = useMemo(
    () =>
      isUser ? (
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
    [handleClick, isUser]
  );

  return (
    <header className={`page-header ${className}`}>
      <Logo />

      {children}

      {!isLoginPage && (
        <ul className="user-block">
          {isUser && (
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