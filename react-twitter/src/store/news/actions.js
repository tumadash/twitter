export const GET_NEWS = 'GET_NEWS';

export function getNews(friends) {
    return {type: GET_NEWS, friends}
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
const formatDate = (date) =>{
    date = new Date(date);
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
};
