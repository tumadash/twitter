import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Menu} from "../components/Menu";
import HeaderPanel from "../components/HeaderPanel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {EXPLORE, HOME, PROFILE} from "../store/stateMenu/enum";
import Profile from "./Profile";
import Home from "./Home";
import Explore from "./Explore";
import history from "../service/history";
import {editUser} from "../store/users/actions";
import {setCurrentUser} from "../store/currentUser/actions";
import {setStateMenu} from "../store/stateMenu/actions";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        width: '100%',
        overflow: 'auto',
        marginTop: '64px',
        height: 'calc(100vh - 64px)'
    }
}));

const Main = ({menu, currentUser, setCurrentUser, editUser, setStateMenu}) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [user, setUser] = React.useState(currentUser);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const setCurrentUserEvent = (user) => { //установка отредактируемого юзера на место текущего
        setCurrentUser(user);
        setUser(user);
    };
    const setProfileUser = (user) => { //переход на профиль другого юзера
        setUser(user);
        setStateMenu(PROFILE);
    };
    const getContainer = () => {
        switch (menu) {
            case HOME:
                return <Home setProfileUser={setProfileUser}/>;
            case EXPLORE:
                return <Explore setProfileUser={setProfileUser}/>;
            case PROFILE:
                return <Profile user={user} setCurrentUser={setCurrentUserEvent} editUser={editUser}/>;
            default:
                return <div/>
        }
    };
    if (!currentUser){
        history.push("/#/");
        history.go();
        return ('');
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HeaderPanel isOpen={open} handleDrawerOpen={handleDrawerOpen}/>
            <Menu setProfileUser={setProfileUser} isOpen={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                {getContainer()}
            </main>
        </div>);
};

const mapStateToProps = state => ({
    menu: state.menu,
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    editUser: user => dispatch(editUser(user)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setStateMenu: state => dispatch(setStateMenu(state))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

