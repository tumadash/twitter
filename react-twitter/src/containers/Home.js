import React from "react";
import News from "../components/News";
import {connect} from "react-redux";

const Home = ({news, currentUser, setProfileUser}) => {
    const userNews = news.filter(
        news => news.user.email === currentUser.email
    );
    return (<News news={userNews} setProfileUser={setProfileUser}/>);
};
const mapStateToProps = state => ({
    news: state.news,
    currentUser: state.currentUser
});

export default connect(
    mapStateToProps
)(Home);
