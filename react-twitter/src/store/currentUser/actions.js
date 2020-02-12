export const SET_CURRENT_USER = 'SET_NAME';


export function setCurrentUser(user) {
    return {type: SET_CURRENT_USER, user}
}