import React from "react";
import News from "../components/News";
import {connect} from "react-redux";

const Explore = ({news, setProfileUser}) => {
    return (<News news={news} setProfileUser={setProfileUser}/>);
};
const mapStateToProps = state => ({
    news: state.news
});

export default connect(
    mapStateToProps
)(Explore);
