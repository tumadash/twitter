export const GET_NEWS = 'GET_NEWS';
export const ADD_NEWS = 'ADD_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';

export function getNews(friends) {
    return {type: GET_NEWS, friends}
}
export function addNews(news) {
    return {type: ADD_NEWS, news}
}
export function deleteNews(id) {
    return {type: DELETE_NEWS, id}
}
export function like(item) {
    return {type: LIKE, item}
}
export function dislike(item) {
    return {type: DISLIKE, item}
}

