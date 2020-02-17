import React from "react";
import News from "../components/News";
import {connect} from "react-redux";

const Explore = ({news}) => {
    return (<News news={news}/>);
};
const mapStateToProps = state => ({
    news: state.news
});

export default connect(
    mapStateToProps
)(Explore);
