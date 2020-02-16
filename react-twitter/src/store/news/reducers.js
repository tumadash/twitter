import {ADD_NEWS, GET_NEWS} from './actions';

export const news = (state = [], action) => {
    switch (action.type) {
        case GET_NEWS:
            return state;
        case ADD_NEWS:
            console.log(action);
            return [...state, action.news];
        default:
            return state
    }
};


