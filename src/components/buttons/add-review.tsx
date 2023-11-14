import { Link } from 'react-router-dom';
import { FC } from 'react';

interface IAddReview {
  id: string;
}
const AddReview: FC<IAddReview> = ({ id }) => (
  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
);

export default AddReview;
