import React from "react";
import {News} from "../components/News";

export const Home = () => {
    return (<News news={[{
        user: {
            name: 'feda',
            avatar: 'f'
        },
        img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19641_en_1',
        date: '12 сентября 2011'
    }, {
        user: {
            name: 'ololol',
            avatar: 'O'
        },
        img: 'https://kbdevstorage1.blob.core.windows.net/asset-blobs/19239_en_1',
        date: '12 сентября 2015'
    }]}/>);
};
