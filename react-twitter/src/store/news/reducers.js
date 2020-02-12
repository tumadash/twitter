import {GET_NEWS} from './actions';

export const news = (state = [], action) => {
    switch (action.type) {
        case GET_NEWS:
            return [...action.news];
        default:
            return state
    }
};

