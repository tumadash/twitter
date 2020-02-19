import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Button, Card, Icon, Input} from 'react-native-elements';

const renderListGuestItem = () => (
  <>
    <Card title={'Profile'}>
      <Input placeholder="Введите имя пользователя" />
    </Card>
  </>
);

export const News = ({list}) => {
  const [selected, setSelected] = React.useState('null');
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={list}
        renderItem={({item}) => renderListGuestItem()}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
