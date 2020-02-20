import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TextInput, View,} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {addNews} from "../store/news/actions";


const NewPost = ({navigation, currentUser, addNews}) => {
    const [text, setText] = useState('');
    const save = () => {
        const date = Date.now();
        const id = date + currentUser.email;
        const news = {id, image:null, text, date, user: currentUser, followers: []};
        addNews(news);
    };
    const goMain = () => {
        navigation.navigate('Main');
    };
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
