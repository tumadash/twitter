import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ExitToApp, Home, People, Person} from '@material-ui/icons';
import {connect} from "react-redux";
import {setStateMenu} from "../store/stateMenu/actions";
import {EXPLORE, HOME, PROFILE, OUT} from "../store/stateMenu/enum";

const MenuButtons = ({setStateMenu}) => (
    <div>
        <ListItem button onClick={() => {
            setStateMenu(PROFILE)
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
        <ListItem button onClick={() => {
            setStateMenu(OUT)
        }}>
            <ListItemIcon>
                <ExitToApp/>
            </ListItemIcon>
            <ListItemText primary="Out"/>
        </ListItem>
    </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setStateMenu: state => dispatch(setStateMenu(state))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuButtons);


