import React, {useCallback, useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, TextInput, View,} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {addNews} from "../store/news/actions";
import ImagePickerLib from 'react-native-image-picker';

const options = {
    title: 'Change photo...',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const NewPost = ({navigation, currentUser, addNews}) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const save = () => {
        const date = Date.now();
        const id = date + currentUser.email;
        const news = {id, image:image, text, date, user: currentUser, followers: []};
        addNews(news);
        navigation.navigate('Main');
    };
    const goMain = () => {
        navigation.navigate('Main');
    };
    const pickImage = useCallback(() => {
        ImagePickerLib.showImagePicker(options, response => {
            if (response.uri) {
                setImage(response.uri);
            }
            console.log(response);
        });
    }, [setImage]);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="position">
                <ScrollView keyboardShouldPersistTaps="always">
                    <View>
                        <Button
                            // buttonStyle={styles.guestButton}
                            icon={<Icon name="arrow-back" color="white"/>}
                            title="Back"
                            onPress={goMain}
                        />
                        <TextInput
                            value={text}
                            onChangeText={setText}
                            placeholder="Комментарий"
                            multiline={true}
                            numberOfLines={10}
                        />
                        <Button
                            icon={<Icon name="camera" color="white"/>}
                            title="Add image"
                            onPress={pickImage}
                        />
                        <Button
                            // buttonStyle={styles.guestButton}
                            icon={<Icon name="save" color="white"/>}
                            title="Save"
                            onPress={save}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};



const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    addNews: guest => dispatch(addNews(guest))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewPost);
