import {ADD_NEWS, DELETE_NEWS, DISLIKE, GET_NEWS, LIKE} from './actions';

function editNews(state, email, id, isLike) {
    let arrayNews = [...state];
    const index = arrayNews.map((e) => e.id).indexOf(id);
    if (~index) {
        if (isLike) {
            arrayNews[index] = {
                id: arrayNews[index].id,
                image: arrayNews[index].image,
                text: arrayNews[index].text,
                date: arrayNews[index].date,
                user: arrayNews[index].user,
                followers: [...arrayNews[index].followers, email]
            };
        } else {
            arrayNews[index] = {
                id: arrayNews[index].id,
                image: arrayNews[index].image,
                text: arrayNews[index].text,
                date: arrayNews[index].date,
                user: arrayNews[index].user,
                followers: arrayNews[index].followers.filter(
                    emailItem => emailItem !== email
                )
            };
        }

    }
    return arrayNews;
}

export const news = (state = [], action) => {
    switch (action.type) {
        case GET_NEWS:
            return state;
        case ADD_NEWS:
            return [action.news, ...state];
        case DELETE_NEWS:
            return state.filter(
                news => news.id !== action.id
            );
        case LIKE:
            return editNews(state, action.item.email, action.item.id, true);
        case DISLIKE:
            return editNews(state, action.item.email, action.item.id, false);
        default:
            return state
    }
};


