import { START_CLOCK, STOP_CLOCK, SET_DERATION, COUNT_DOWN } from "../constants/ActionTypes";

export const startClock = ( time ) => ({ type: START_CLOCK, time })
export const stopClock = ( time ) => ({ type: STOP_CLOCK, time })
export const setDeration = ( deration ) => ({ type: SET_DERATION, deration })
export const countDown = () => ({ type: COUNT_DOWN })