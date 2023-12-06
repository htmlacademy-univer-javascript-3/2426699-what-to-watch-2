import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index/index.ts';
import axios, { AxiosResponse } from 'axios';
import { TUser } from '../../types/user.ts';
import { TFilm } from '../../types/film.ts';
import { axiosInstance } from '../../services/api.ts';
import { IAuth } from '../../types/api.ts';


export const getAuthorizationStatus = createAsyncThunk(
  'user/getAuthorizationStatus',
  async () => {
    try {
      await axiosInstance.get('/login');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e;
      } else {
        throw new Error('error');
      }
    }
  },
);

export const login = createAsyncThunk<TUser, IAuth, {
  state: RootState;
}>(
  'user/login',
  async ({ email, password }) => {
    try {
      const response = await axiosInstance.post<TUser>('/login', { email, password });
      return response.data;
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