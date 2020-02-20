import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Main} from "./screens/Main";
import NewPost from "./screens/NewPost";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const AppNavigator = createSwitchNavigator({
    NewPost: {
        screen: NewPost,
    },
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    },
    Main: {
        screen: Main,
    },
}, { initialRouteName: 'SignIn' });

export default createAppContainer(AppNavigator);
