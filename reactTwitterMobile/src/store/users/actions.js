export const ADD_USERS = 'ADD_USERS';
export const EDIT_USERS = 'EDIT_USERS';


export function addUser(user) {
    return {type: ADD_USERS, user}
}
export function editUser(user) {
    return {type: EDIT_USERS, user}
}
