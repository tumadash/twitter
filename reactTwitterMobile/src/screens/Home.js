import React from 'react';
import {News} from "./News";
import {connect} from "react-redux";

const Home = ({news, currentUser}) => {
    const userNews = news.filter(
        news => news.user.email === currentUser.email
    );
    return (
        <News list={userNews}/>
    );
};
const mapStateToProps = state => ({
    news: state.news,
    currentUser: state.currentUser
});

export default connect(
    mapStateToProps
)(Home);

