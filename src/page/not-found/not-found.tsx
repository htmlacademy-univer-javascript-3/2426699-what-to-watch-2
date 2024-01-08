import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const NotFoundPage = () => {
  const pageContent = useMemo(() => (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Main Page</Link>
    </div>
  ), []);
  return pageContent;
};

export default NotFoundPage;
