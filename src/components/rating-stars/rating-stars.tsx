import { FC, useMemo } from 'react';
import { RatingInput } from './rating-input.tsx';
import { Control } from 'react-hook-form';
import { FormAddReview } from '../../types/form-add-review.ts';

const generateRatings = () =>
  [...Array(10).keys()].map((index) => index + 1).sort((a, b) => b - a);

interface IRatingStarsProps {
  onChangeRating: (value: number) => void;
  control: Control<FormAddReview>;
}

export const RatingStars: FC<IRatingStarsProps> = ({ onChangeRating, control }) => {
  const ratings = useMemo(() => generateRatings(), []);

  return (
    <div className="rating__stars">
      {ratings.map((rating) => (
        <RatingInput
          key={rating}
          rating={rating}
          onChangeRating={onChangeRating}
          control={control}
        />
      ))}
    </div>
  );
};
