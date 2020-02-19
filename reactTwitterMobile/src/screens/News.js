import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Button, Card} from 'react-native-elements';
import Text from "react-native-elements/src/text/Text";

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

const renderListNewsItem = (newsItem) => (
  <>
    <Card title={<Text>{newsItem.user.lastName + ' ' + newsItem.user.firstName}<br/>{formatDate(newsItem.date)}</Text>} image={newsItem.image}>
        <Text>{newsItem.text}</Text>
    </Card>
  </>
);

export const News = ({list}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Button
            title="Add news"
        />
      <FlatList
        data={list}
        renderItem={({newsItem}) => renderListNewsItem(newsItem)}
        keyExtractor={newsItem => newsItem.id}
      />
    </SafeAreaView>
  );
};
