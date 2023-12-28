import { createAction } from '@reduxjs/toolkit';
import { ECatalog } from '../../types/ECatalog';

export const setGenre = createAction<ECatalog>('reducer/setGenreType');
