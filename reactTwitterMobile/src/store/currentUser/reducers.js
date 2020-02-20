import {SET_CURRENT_USER} from './actions';

export const currentUser = (state =  {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.user;
        default:
            return state
    }
};

