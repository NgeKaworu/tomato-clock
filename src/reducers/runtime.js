import { START_CLOCK, STOP_CLOCK } from "../constants/ActionTypes";

const runtime = (state = { runtime: false }, action) => {
    switch (action.type) {
        case START_CLOCK:
            return {
                ...state,
                runtime: true
            }
        case STOP_CLOCK:
            return {
                ...state,
                runtime: false
            }
        default:
            return state
    }
}

export default runtime