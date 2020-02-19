import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import {Button, Card, Icon, Input} from 'react-native-elements';
import {editUser} from "../store/users/actions";
import {setCurrentUser} from "../store/currentUser/actions";
import {connect} from 'react-redux';

// import {setName, setPhoto} from '../store/user/actions';

const options = {
    title: 'Выберите фото...',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const DEFAULT_PIC = 'https://i.picsum.photos/id/1011/5472/3648.jpg';

const ProfileScreen = ({currentUser, setName, setPhoto}) => {
    const image = {uri: DEFAULT_PIC};
    const user = currentUser;

    console.log(currentUser);
    // let [userAvatar, setUserAvatarState] = useState(user.userAvatar);

    let [firstName, setFirstNameState] = useState(user.firstName);
    let [lastName, setLastNameState] = useState(user.lastName);
    let [email, setEmailState] = useState(user.email);
    let [password, setPasswordState] = useState(user.password);

    let [gender, setGenderState] = useState(user.gender);
    let [city, setCityState] = useState(user.city);
    let [about, setAboutState] = useState(user.about);
    const pickImage = useCallback(() => {
        ImagePickerLib.showImagePicker(options, response => {
            if (response.uri) {
                setPhoto(response.uri);
            }
        });
    }, [setPhoto]);
    const save = () => {
        const newUser = {
            firstName,
            lastName,
            password,
            gender,
            city,
            about,
            // userAvatar: e.target.result
        };
        editUser(newUser);
        setCurrentUser(newUser);
    };
    return (
        <SafeAreaView style={{flex: 1}}>
            <Card
                title={"Profile"}
                image={image}>
                <Button
                    icon={<Icon name="camera" color="#ffffff"/>}
                    title="Выбрать фото"
                    onPress={pickImage}
                />
                <Input
                    onChangeText={setFirstNameState}
                    value={firstName}
                    placeholder="Input First Name"
                    label={'First name:'}
                    onBlur={save}
                />
                <Input
                    onChangeText={setLastNameState}
                    value={lastName}
                    placeholder="Input Last Name"
                    label={'Last name:'}
                    onBlur={save}
                />
                <Input
                    value={email}
                    placeholder="Input email"
                    label={'Email:'}
                    disabled={true}
                />
                <Input
                    onChangeText={setPasswordState}
                    value={password}
                    label={'Password:'}
                    placeholder="Input password"
                    onBlur={save}
                />
                <Input
                    onChangeText={setGenderState}
                    value={gender}
                    label={'Gender:'}
                    placeholder="Input gender"
                    onBlur={save}
                />
                <Input
                    onChangeText={setCityState}
                    value={city}
                    label={'City:'}
                    placeholder="Input city"
                    onBlur={save}
                />
                <Input
                    onChangeText={setAboutState}
                    value={about}
                    label={'About:'}
                    placeholder="Input about"
                    onBlur={save}
                />
            </Card>
        </SafeAreaView>
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

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    editUser: user => dispatch(editUser(user)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileScreen);
