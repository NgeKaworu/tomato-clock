import { AUTH_LOGIN, AUTH_LOGOUT, IS_FETCHING } from "./../constants/ActionTypes";

const auth = (state = { isAuthenticated: false, isFetching: false }, action) => {
    switch(action.type){
        case AUTH_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                isFetching: false
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                isFetching: false
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state;
    }
}

export default auth