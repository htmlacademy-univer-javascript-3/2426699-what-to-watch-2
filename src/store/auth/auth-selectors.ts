import { RootState } from '../index';


export const selectAuth = (state: RootState) => state.reducer.auth;
export const authorizationStatusData = (state: RootState) => selectAuth(state).authorizationStatus.apiData;
export const authorizationStatusStatus = (state: RootState) => selectAuth(state).authorizationStatus.apiStatus;
export const authorizationStatusError = (state: RootState) => selectAuth(state).authorizationStatus.apiError;

export const userStatusData = (state: RootState) => selectAuth(state).user.apiData;
export const userStatusStatus = (state: RootState) => selectAuth(state).user.apiStatus;
export const userStatusError = (state: RootState) => selectAuth(state).user.apiError;
