import {SET_STATE} from './actions';

export const newPostState = (state = false, action) => {
    switch (action.type) {
        case SET_STATE:
            return action.state;
        default:
            return state
    }
};


