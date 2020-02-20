import React from 'react';
import News from "./News";
import {connect} from "react-redux";


const Explore = ({news, setProfileUser, navigation}) => {
    return (<News list={news} setProfileUser={setProfileUser} navigation={navigation}/>);
};
const mapStateToProps = state => ({
    news: state.news
});

export default connect(
    mapStateToProps
)(Explore);
