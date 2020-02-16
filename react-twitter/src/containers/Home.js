import React from "react";
import News from "../components/News";
import {addNews} from "../store/news/actions";
import {connect} from "react-redux";
import {setOpen} from "../store/newPostState/actions";

const Home = ({news}) => {
    return (<News news={news}/>);
};
const mapStateToProps = state => ({
    news: state.news
});



export default connect(
    mapStateToProps
)(Home);