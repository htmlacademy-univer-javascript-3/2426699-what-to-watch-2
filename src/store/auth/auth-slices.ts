import { createSlice } from '@reduxjs/toolkit';
import { getAuthorizationStatus, login, logout } from '../api-actions/api-actions.ts';
import { AuthStatusEnum, ApiStatusState, EReducers, initialApiState } from '../../types/api.ts';
import { TUser } from '../../types/user.ts';
import { dropToken, saveToken } from '../../services/token.ts';


export interface IAuthState {
  authorizationStatus: ApiStatusState<boolean>;
  user: ApiStatusState<TUser>;
  
  
}

const initialState: IAuthState = {
  authorizationStatus: initialApiState,
  user: initialApiState
};

export const authSlice = createSlice({
  name: EReducers.Auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthorizationStatus.pending, (state) => {
        state.authorizationStatus.apiStatus = AuthStatusEnum.LOADING;
      })
      .addCase(getAuthorizationStatus.fulfilled, (state, action) => {
        state.authorizationStatus.apiStatus = AuthStatusEnum.Authorized;
        state.authorizationStatus.apiData = true;
        state.user.apiData = action.payload;
      })
      .addCase(getAuthorizationStatus.rejected, (state) => {
        state.authorizationStatus.apiStatus = AuthStatusEnum.NotAuthorized;
      })


      .addCase(login.pending, (state) => {
        state.user.apiStatus = AuthStatusEnum.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus.apiStatus = AuthStatusEnum.Authorized;
        saveToken(action.payload.token);
        state.authorizationStatus.apiData = true;
        state.user.apiData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.authorizationStatus.apiStatus = AuthStatusEnum.NotAuthorized;
        state.authorizationStatus.apiError = action.error?.message || 'error';
      })

      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.authorizationStatus = initialApiState;
        state.user = initialApiState;
      });

  },
});