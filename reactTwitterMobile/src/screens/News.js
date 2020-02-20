import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Button, Card, Icon, ListItem} from 'react-native-elements';
import Text from "react-native-elements/src/text/Text";
import {connect} from "react-redux";

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

const renderListNewsItem = (newsItem, currentUser) => {
    console.log(newsItem);
    const setIcon = (currentUser, newsItem) => {
        // return currentUser.email === newsItem.user.email ?
        //     {rightIcon: <Icon name="close" color="black"/>} :
        //     ''
        return {rightIcon: <Icon name="close" color="black"/>};
    };
    return (<>
        <Card>
            <ListItem leftAvatar={{title: 'MD'}} title={newsItem.user.lastName + ' ' + newsItem.user.firstName}
                      subtitle={formatDate(newsItem.date)} {...setIcon()}/>
            <Text>{newsItem.text}</Text>
        </Card>
    </>);
};

export const News = ({list, navigation, currentUser}) => {
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
                renderItem={({item}) => renderListNewsItem(item, currentUser)}
                keyExtractor={newsItem => newsItem.date}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});
export default connect(
    mapStateToProps
)(News);
