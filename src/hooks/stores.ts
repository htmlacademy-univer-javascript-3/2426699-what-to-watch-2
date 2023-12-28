import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFilmRating = (rating = 0) => {
  if (rating >= 10) {
    return 'Awesome';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 5) {
    return 'Good';
  } else if (rating >= 3) {
    return 'Normal';
  }
  return 'Bad';
};
