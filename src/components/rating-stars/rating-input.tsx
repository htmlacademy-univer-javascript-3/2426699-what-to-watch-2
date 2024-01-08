import { FC, useCallback, useMemo } from 'react';
import { Control, useWatch } from 'react-hook-form';
import { FormAddReview } from '../../types/form-add-review.ts';

interface IRatingInputProps {
  rating: number;
  onChangeRating: (value: number) => void;
  control: Control<FormAddReview>;
}

export const RatingInput: FC<IRatingInputProps> = ({
  rating, onChangeRating, control
}) => {
  const watchRating = useWatch({
    control,
    name: 'rating',
  });

  const handleRaitingChange = useCallback((value: React.ChangeEvent<HTMLInputElement>) => {
    onChangeRating(Number(value.target.value));
  }, [onChangeRating]);

  const memoizedWatchRating = useMemo(() => watchRating, [watchRating]);

  return (
    <>
      <input
        className="rating__input"
        id={`star-${rating}`}
        type="radio"
        name="rating"
        value={rating}
        onChange={handleRaitingChange}
        checked={memoizedWatchRating === rating}
      />
      <label className="rating__label" htmlFor={`star-${rating}`}>
        Rating {rating}
      </label>
    </>
  );
};
