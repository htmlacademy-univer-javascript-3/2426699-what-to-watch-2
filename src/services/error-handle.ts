import { store } from '../store/index';
import { setError } from '../store/action/action';

export const errorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => store.dispatch(setError(null)), 3000);
};
