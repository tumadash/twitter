import {SET_STATE_MENU} from './actions';
import {HOME} from "./enum";

export const menu = (state = HOME, action) => {
    switch (action.type) {
        case SET_STATE_MENU:
            return action.state;
        default:
            return state
    }
};


