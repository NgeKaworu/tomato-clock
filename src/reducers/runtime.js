import { START_CLOCK, STOP_CLOCK } from "../constants/ActionTypes";

const runtime = (state = false, action) => {
    switch (action.type) {
        case START_CLOCK:
            return true
        case STOP_CLOCK:
            return false
        default:
            return state
    }
}

export default runtime