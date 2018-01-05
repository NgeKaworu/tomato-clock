import { START_CLOCK, STOP_CLOCK } from "../constants/ActionTypes";

export default function runtime (state = { runtime: false }, action) {
    switch (action.type) {
        case START_CLOCK:
            return {
                runtime: true
            }
        case STOP_CLOCK:
            return {
                runtime: false
            }
        default:
            return state
    }
}