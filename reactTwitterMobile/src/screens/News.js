import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Image, ListItem} from 'react-native-elements';
import Text from "react-native-elements/src/text/Text";
import {connect} from "react-redux";
import {deleteNews, dislike, like} from "../store/news/actions";

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

const renderListNewsItem = (newsItem, currentUser, deleteNews, dislike, like) => {
    let isLike = false;
    if (newsItem.followers.includes(currentUser.email)) {
        isLike = true;
    }
    const setLikeEvent = () => {
        if (isLike) {
            dislike({email: currentUser.email, id: newsItem.id});
            isLike = false;
        } else {
            like({email: currentUser.email, id: newsItem.id});
            isLike = true;
        }
    };
    const setIcon = () => {
        return currentUser.email === newsItem.user.email ?
            {
                rightIcon: <Icon name="close" color="black" onPress={() => {
                    deleteNews(newsItem.id)
                }}/>
            } :
            ''
    };
    console.log(1321,newsItem.user)
    return (<>
        <Card>
            <ListItem containerStyle={styles.title} leftAvatar={{source: newsItem.user.userAvatar}}
                      title={newsItem.user.lastName + ' ' + newsItem.user.firstName}
                      subtitle={formatDate(newsItem.date)} {...setIcon()}/>
            { newsItem.image ? <Image
                source={{ uri: newsItem.image }}
                style={{ height: 200 }}
                PlaceholderContent={<ActivityIndicator />}
            /> : <View />}
            <Text>{newsItem.text}</Text>
            <View style={styles.footer}>
                <Icon iconStyle={styles.heart} name="heart" type="evilicon" color={isLike ? 'red' : 'black'} onPress={setLikeEvent}/>
                <Text style={styles.heart}>{newsItem.followers.length}</Text>
            </View>
        </Card>
    </>);
};

const News = ({list, navigation, currentUser, deleteNews, dislike, like}) => {
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
                renderItem={({item}) => renderListNewsItem(item, currentUser, deleteNews, dislike, like)}
                keyExtractor={newsItem => newsItem.date}
            />
        </SafeAreaView>
    );
};
const mapDispatchToProps = dispatch => ({
    deleteNews: guest => dispatch(deleteNews(guest)),
    like: state => dispatch(like(state)),
    dislike: state => dispatch(dislike(state))
});

const styles = StyleSheet.create({
    title: {
        padding: 0,
        paddingBottom: 10
    },
    heart: {
        marginRight: 10,
        marginTop: 5,
        width: 20,
    },
    footer: {
        display: "flex",
        flexWrap: 'nowrap',
        flexDirection:'row'
    }
});

const mapStateToProps = state => ({
    currentUser: state.currentUser
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
