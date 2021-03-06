import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ExitToApp, Home, People, Person} from '@material-ui/icons';
import {connect} from "react-redux";
import {setStateMenu} from "../store/stateMenu/actions";
import {EXPLORE, HOME, PROFILE, OUT} from "../store/stateMenu/enum";
import history from "../service/history";
import {setCurrentUser} from "../store/currentUser/actions";

const MenuButtons = ({setStateMenu, setCurrentUser, setProfileUser, currentUser}) => {

    const out = () => {
        setCurrentUser(null);
        history.push("/#/");
        history.go();
    };

    return (<div>
        <ListItem button onClick={() => {
            setProfileUser(currentUser)
        }}>
            <ListItemIcon>
                <Person/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button onClick={() => {
            setStateMenu(HOME)
        }}>
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button onClick={() => {
            setStateMenu(EXPLORE)
        }}>
            <ListItemIcon>
                <People/>
            </ListItemIcon>
            <ListItemText primary="Explore"/>
        </ListItem>
        <ListItem button onClick={out}>
            <ListItemIcon>
                <ExitToApp/>
            </ListItemIcon>
            <ListItemText primary="Out"/>
        </ListItem>
    </div>);
};


const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    setStateMenu: state => dispatch(setStateMenu(state)),
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuButtons);


