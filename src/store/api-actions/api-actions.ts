import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index/index.ts';
import axios, { AxiosResponse } from 'axios';
import { TUser } from '../../types/user.ts';
import { TFilm } from '../../types/film.ts';
import { axiosInstance } from '../../services/api.ts';
import { IAuth } from '../../types/api.ts';
import { TReview } from '../../types/review.ts';


export const getAuthorizationStatus = createAsyncThunk(
  'user/getAuthorizationStatus',
  async () => {
    const { data } = await axiosInstance.get('/login');
    return data;
  },
);

export const login = createAsyncThunk<TUser, IAuth, {
  state: RootState;
}>(
  'user/login',
  async ({ email, password }) => {
    try {
      const { data } = await axiosInstance.post<TUser>('/login', { email, password });
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          throw new Error('error 401');
        }
        throw e;
      } else {
        throw new Error('error');
      }
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await axiosInstance.delete('/logout');
      localStorage.removeItem('auth_token');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  },
);


export const fetchMovies = createAsyncThunk(
  'reducer/fetchMovies',
  async () => {
    try {
      const response: AxiosResponse<TFilm[]> = await axiosInstance.get('/films');
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);


export const fetchFilm = createAsyncThunk(
  'films/fetchFilm',
  async (filmId: string) => {
    try {
      const { data } = await axiosInstance.get<TFilm>(`/films/${filmId}`);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const fetchFavoriteFilms = createAsyncThunk(
  'films/fetchFavoriteFilms',
  async () => {
    try {
      const { data } = await axiosInstance.get<TFilm[]>('/favorite');
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const fetchPromo = createAsyncThunk(
  'films/fetchPromo',
  async () => {
    try {
      const { data } = await axiosInstance.get<TFilm>('/promo');
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (filmId: string) => {
    try {
      const { data } = await axiosInstance.get<TReview[]>(`/comments/${filmId}`);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const fetchSimilar = createAsyncThunk(
  'films/fetchSimilar',
  async (filmId: string) => {
    try {
      const { data } = await axiosInstance.get<TFilm[]>(`/films/${filmId}/similar`);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const setFavorite = createAsyncThunk<TFilm, { status: boolean; filmId: string }>(
  'films/setFavorite',
  async ({ status, filmId }) => {
    try {
      const { data } = await axiosInstance.post<TFilm>(
        `/favorite/${filmId}/${status ? 1 : 0}`
      );
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  }
);

export const addReview = createAsyncThunk<
  void,
  { comment: string; rating: number; filmId: string }>(
    'reviews/addReview',
    async ({ comment, rating, filmId }) => {
      try {
        await axiosInstance.post(`/comments/${filmId}`, { comment, rating });
      } catch (e) {
        if (axios.isAxiosError(e)) {
          throw e;
        } else {
          throw new Error('error');
        }
      }
    }
  );

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  try {
    const response = await axiosInstance.get('/api/genres');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('Error fetching genres');
    }
  }
});
