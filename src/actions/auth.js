import { AUTH_LOGIN, AUTH_LOGOUT } from "./../constants/ActionTypes";

export const authLogin = () => ({ type: AUTH_LOGIN })
export const authLogout = () => ({ type: AUTH_LOGOUT })