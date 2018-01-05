import { START_CLOCK, STOP_CLOCK, SET_DERATION, COUNT_DOWN } from "../constants/ActionTypes";

export default function clock(state = { deration: 1500000 }, action){
    switch (action.type) {
        case START_CLOCK:
            return {
                ...state,
                startTime: action.time,
                planStopTime: action.time + state.deration
            }
        case STOP_CLOCK:
            return {
                ...state,
                stopTime: action.time
            }
        case SET_DERATION:
            return {
                ...state,
                deration: action.deration
            }
        case COUNT_DOWN:
            return {
                ...state,
                deration: state.deration - 1000
            }
        default:
            return state
    }
}