import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ExitToApp, Home, People, Person} from '@material-ui/icons';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Person/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Home/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <People/>
            </ListItemIcon>
            <ListItemText primary="Explore"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ExitToApp/>
            </ListItemIcon>
            <ListItemText primary="Out"/>
        </ListItem>
    </div>
);


