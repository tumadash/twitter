export const GET_NEWS = 'GET_NEWS';
export const ADD_NEWS = 'ADD_NEWS';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';

export function getNews(friends) {
    return {type: GET_NEWS, friends}
}
export function addNews(news) {
    return {type: ADD_NEWS, news}
}
export function like(item) {
    return {type: LIKE, item}
}
export function dislike(item) {
    return {type: DISLIKE, item}
}

const users = [{
    'trijoibgdjih': [
        {
            img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19641_en_1',
            date: 1581494555465,
            text: '  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n' +
                '                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n' +
                '                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\n' +
                '                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\n' +
                '                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\n' +
                '                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.'
        },
        {
            img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19641_en_1',
            date: 1318402955465,
            text: '  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n' +
                '                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n' +
                '                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\n' +
                '                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\n' +
                '                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\n' +
                '                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.'
        }
    ],
    'uwrheuhwlirej': [
        {
            img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19239_en_1',
            date: 1565596955465,
            text: ' Find: who don\'t follow you back, ghost followers, who have not left any likes or comments in most popular social network for sharing world\'s moments.'
        }
    ]
}];


