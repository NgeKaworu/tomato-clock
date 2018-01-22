import { CHANGE_ID } from "../constants/ActionTypes";

const currentId = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_ID:
            return action.id
        default:
            return state
    }
}

export default currentId