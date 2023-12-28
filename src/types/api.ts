
export enum AuthStatusEnum {
  LOADING = 'LOADING',
  Authorized = 'Authorized',
  NotAuthorized = 'NotAuthorized',
}

export interface ApiStatusState<T> {
  apiData: T | null;
  apiStatus: AuthStatusEnum | null;
  apiError: string | null;
}

export const initialApiState = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};

export interface IAuth {
  email: string;
  password: string;
}


export enum EReducers {
  Films = 'films',
  Auth = 'auth',

}

export const enum ReducerName {
  Authorzation = 'authorizationReducer',
  Main = 'mainReducer',
  Film = 'filmReducer'
}


export const enum AuthorizationStatus {
  Unauthorized = 'UnAuthorized',
  Authorized = 'Authorized',
  Idle = 'Idle'
}
