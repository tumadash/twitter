import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Main} from "./screens/Main";
import NewPost from "./screens/NewPost";

const AppNavigator = createSwitchNavigator({
    NewPost: {
        screen: NewPost,
    },
    Main: {
        screen: Main,
    },
}, { initialRouteName: 'Main' });

export default createAppContainer(AppNavigator);
