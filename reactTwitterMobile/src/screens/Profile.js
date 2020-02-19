import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import {Button, Card, Icon, Input} from 'react-native-elements';
// import {connect} from 'react-redux';
// import {setName, setPhoto} from '../store/user/actions';

const options = {
  title: 'Выберите фото...',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const DEFAULT_PIC = 'https://i.picsum.photos/id/1011/5472/3648.jpg';

export const ProfileScreen = ({user, setName, setPhoto}) => {
  const image = {uri: DEFAULT_PIC};
  const [text, setText] = useState('user.name');
  const pickImage = useCallback(() => {
    ImagePickerLib.showImagePicker(options, response => {
      if (response.uri) {
        setPhoto(response.uri);
      }
    });
  }, [setPhoto]);
  const saveName = () => {
    setName(text);
  };
  return (
    <>
      <Card
        title={"Profile"}
        image={image}>
        <Input
          onChangeText={setText}
          value={text}
          placeholder="Введите имя пользователя"
          onBlur={saveName}
        />
        <Button
          icon={<Icon name="camera" color="#ffffff" />}
          title="Выбрать фото"
          onPress={pickImage}
        />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  guestButton: {
    width: 100,
    margin: 10,
  },
});

// const mapStateToProps = state => ({
//   user: state.user,
// });

// const mapDispatchToProps = dispatch => ({
//   setName: name => dispatch(setName(name)),
//   setPhoto: uri => dispatch(setPhoto(uri)),
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ProfileScreen);
