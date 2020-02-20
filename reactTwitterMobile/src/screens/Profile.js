import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import {Button, Card, Icon, Input} from 'react-native-elements';
import {editUser} from "../store/users/actions";
import {setCurrentUser} from "../store/currentUser/actions";
import {connect} from 'react-redux';

// import {setName, setPhoto} from '../store/user/actions';

const options = {
    title: 'Change photo...',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const DEFAULT_PIC = 'data:image/png;base64,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';

const ProfileScreen = ({currentUser, navigation, setCurrentUser, editUser}) => {
    const image = {uri: DEFAULT_PIC};
    const user = currentUser;

    console.log(currentUser);

    let [userAvatar, setUserAvatarState] = useState(user.userAvatar === undefined ? image : user.userAvatar);

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
                const newUser = {
                    firstName,
                    lastName,
                    password,
                    email,
                    gender,
                    city,
                    about,
                    userAvatar: {uri: response.uri}
                };
                setUserAvatarState({uri: response.uri});
                editUser(newUser);
                setCurrentUser(newUser);
            }
            console.log(response);
        });
    }, [setUserAvatarState]);
    const save = () => {
        console.log(45, userAvatar);
        const newUser = {
            firstName,
            lastName,
            password,
            gender,
            email,
            city,
            about,
            userAvatar
        };
        editUser(newUser);
        setCurrentUser(newUser);
    };
    const out = () => {
        setCurrentUser({});
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card
                title={"Profile"}
                image={userAvatar}>
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
            <Button title='Out' onPress={out} buttonStyle={styles.outButton}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    outButton: {
        width: 100,
        margin: 15
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
