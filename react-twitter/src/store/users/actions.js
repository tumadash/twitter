export const ADD_USERS = 'ADD_USERS';


export function addUser(user) {
    return {type: ADD_USERS, user}
}