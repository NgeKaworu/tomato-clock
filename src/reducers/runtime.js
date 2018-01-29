import { START_CLOCK, STOP_CLOCK, COMPLETE_ALL } from "../constants/ActionTypes";

const runtime = (state = false, action) => {
    switch (action.type) {
        case START_CLOCK:
            return true
        case STOP_CLOCK:
            return false
        case COMPLETE_ALL:
            return false
        default:
            return state
    }
}

export default runtime