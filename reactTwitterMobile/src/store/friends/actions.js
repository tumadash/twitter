export const GET_FRIENDS = 'GET_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';


export function getFriends(user) {
    return {type: GET_FRIENDS, user}
}
export function deleteFriends(friend) {
    return {type: DELETE_FRIENDS, friend}
}
export function addFriends(friend) {
    return {type: ADD_FRIENDS, friend}
}
