import { SWITCH_ON, SWITCH_OFF } from "../constants/ActionTypes";

const clockSwitch = (state = false, action) => {
    switch (action.type) {
        case SWITCH_ON:
            return true
        case SWITCH_OFF:
            return false
        default:
            return state
    }
}

export default clockSwitch