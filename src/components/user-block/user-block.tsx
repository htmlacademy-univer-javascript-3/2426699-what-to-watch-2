import React from 'react';
import { Link } from 'react-router-dom';
import { userStatusData } from '../../store/auth/auth-selectors';
import { useAppSelector } from '../../hooks/stores';
import { authorizationStatusStatus } from '../../store/auth/auth-selectors';

interface UserBlockProps {
   isAuthenticated: boolean;
}
 
//TODO добавить проверку авторигован ли пользователь или нет
const UserBlock: React.FC = () => {
  const user = useAppSelector(userStatusData);
  const status = useAppSelector(authorizationStatusStatus);
   

  return (
    <ul className="user-block">
      { !status ? (
        <>
          <li className="user-block__item">
            <Link to="/mylist">
              <div className="user-block__avatar">
                <img src={user?.avatarUrl}
                  alt={user?.name}
                  width="63" height="63" />
              </div>
            </Link>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link to="/login" className="user-block__link">
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
};

export default UserBlock;