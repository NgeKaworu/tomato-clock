import fakeAuth from "./../api/fakeAuth";
import { AUTH_LOGIN, AUTH_LOGOUT, IS_FETCHING } from "./../constants/ActionTypes";

const authLogin = () => ({ type: AUTH_LOGIN })
const authLogout = () => ({ type: AUTH_LOGOUT })
const isFetching = () => ({ type: IS_FETCHING })

export const loginWithFakeAsync = () => dispatch => {
    dispatch(isFetching());
    fakeAuth.fakeAsync(() => {
            dispatch(authLogin());
        }
    )
}
export const logoutWithFakeAsync = () => dispatch => {
    dispatch(isFetching());
    fakeAuth.fakeAsync(() => {
        dispatch(authLogout());
    }
    )
}