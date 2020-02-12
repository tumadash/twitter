import {GET_FRIENDS, SET_NAME, SET_PHOTO} from './actions';

const friendsArray = {
    'trijoibgdjih': {
        name: 'feda',
        avatar: 'f'
    },
    'uwrheuhwlirej': {
        name: 'ololol',
        avatar: 'O'
    }
}
export const friends = (state = [], action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return [...friendsArray];
        default:
            return state
    }
};


