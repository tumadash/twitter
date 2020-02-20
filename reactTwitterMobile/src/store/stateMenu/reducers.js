import {SET_STATE_MENU} from './actions';
import {HOME_STATE, PROFILE_STATE} from "./enum";

export const menu = (state = PROFILE_STATE, action) => {
    switch (action.type) {
        case SET_STATE_MENU:
            return action.state;
        default:
            return state
    }
};


