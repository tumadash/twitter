import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Button, Card, Icon, ListItem} from 'react-native-elements';
import Text from "react-native-elements/src/text/Text";
import {connect} from "react-redux";
import {addNews, deleteNews} from "../store/news/actions";

const formatDate = (date) => {
    date = new Date(date);
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
};

const renderListNewsItem = (newsItem, currentUser, deleteNews) => {
    const setIcon = () => {
        return currentUser.email === newsItem.user.email ?
            {rightIcon: <Icon name="close" color="black" onPress={()=>{deleteNews(newsItem.id)}}/>} :
            ''
    };
    return (<>
        <Card>
            <ListItem leftAvatar={{title: 'MD'}} title={newsItem.user.lastName + ' ' + newsItem.user.firstName}
                      subtitle={formatDate(newsItem.date)} {...setIcon()}/>
            <Text>{newsItem.text}</Text>
        </Card>
    </>);
};

const News = ({list, navigation, currentUser, deleteNews}) => {
    const goNewPost = () => {
        navigation.navigate('NewPost');
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <Button
                title="Add news"
                onPress={goNewPost}
            />
            <FlatList
                data={list}
                renderItem={({item}) => renderListNewsItem(item, currentUser, deleteNews)}
                keyExtractor={newsItem => newsItem.date}
            />
        </SafeAreaView>
    );
};
const mapDispatchToProps = dispatch => ({
    deleteNews: guest => dispatch(deleteNews(guest))
});

const mapStateToProps = state => ({
    currentUser: state.currentUser
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
