import React, {useCallback, useState} from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    TextInput,
    View,
    StyleSheet
} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
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
        const news = {id, image: image, text, date, user: currentUser, followers: []};
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
        });
    }, [setImage]);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="position">
                <ScrollView keyboardShouldPersistTaps="always">
                    <View style={styles.container}>
                        <Button
                            buttonStyle={styles.button}
                            icon={<Icon name="arrow-back" color="white"/>}
                            title="Back"
                            onPress={goMain}
                        />
                        <Image
                            source={{uri: image}}
                            style={{height: image !== '' ? 200 : 0}}
                            PlaceholderContent={<ActivityIndicator/>}
                        />
                        <TextInput
                            style={styles.textInput}
                            value={text}
                            onChangeText={setText}
                            placeholder="Text"
                            multiline={true}
                            numberOfLines={10}
                        />
                        <Button
                            buttonStyle={styles.button}
                            icon={<Icon name="camera" color="white"/>}
                            title="Add image"
                            onPress={pickImage}
                        />
                        <Button
                            buttonStyle={styles.button}
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

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#7c7c7c'
    },
    container: {
        margin: 10,
    },
    button: {
        marginBottom: 10
    },
});

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
