import {ADD_USERS} from './actions';

export const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USERS:
            return [...state, action.user];
        default:
            return state
    }
};


