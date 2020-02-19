import {SET_CURRENT_USER} from './actions';

export const currentUser = (state =  {
    firstName: "Ivan",
    lastName: 'Ivanov',
    email: "sobaka@a.d",
    password: 'rasdf',
    about: 'a dsfs dfgd fgr tyrt y',
    city: 'New London',
    gender: 'male'
}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.user;
        default:
            return state
    }
};

