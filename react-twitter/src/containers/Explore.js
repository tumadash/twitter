import React from "react";
import {News} from "../components/News";

export const Explore = () => {
    return (<News news={[{
        user: {
            name: 'feda',
            avatar: 'f'
        },
        img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19641_en_1',
        date: '12 сентября 2011',
        text: '  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n' +
            '                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n' +
            '                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\n' +
            '                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\n' +
            '                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\n' +
            '                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.'
    }, {
        user: {
            name: 'ololol',
            avatar: 'O'
        },
        img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19239_en_1',
        date: '12 сентября 2015'
    }]}/>);
};
