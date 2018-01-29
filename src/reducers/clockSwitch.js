import { SWITCH_ON, SWITCH_OFF, COMPLETE_ALL } from "../constants/ActionTypes";

const clockSwitch = (state = false, action) => {
    switch (action.type) {
        case SWITCH_ON:
            return true
        case SWITCH_OFF:
            return false
        case COMPLETE_ALL:
            return false
        default:
            return state
    }
}

export default clockSwitch