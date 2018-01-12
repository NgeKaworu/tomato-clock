import { AUTH_LOGIN, AUTH_LOGOUT } from "./../constants/ActionTypes";

const auth = (state = { isAuthenticated: false }, action) => {
    switch(action.type){
        case AUTH_LOGIN:
            return {
                isAuthenticated: true
            }
        case AUTH_LOGOUT:
            return {
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default auth