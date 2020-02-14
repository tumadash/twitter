import {ADD_USERS, EDIT_USERS} from './actions';

function editUsers(state, user) {
    let array = [...state];
    const index = array.map((e) => e.email).indexOf(user.email);
    if (~index) {
        array[index] = user;
    }
    return array;
}

export const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USERS:
            return [...state, action.user];
        case EDIT_USERS:
            return editUsers(state, action.user);
        default:
            return state
    }
};


