import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction<string>('genres/setGenreType');
