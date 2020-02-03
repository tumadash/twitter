import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems} from "./ListItems";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        height: '100vh',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}));


export const Menu = ({isOpen, handleDrawerClose}) => {
    const classes = useStyles();
    return <Drawer
        variant="permanent"
        classes={{
            paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose),
        }}
        open={isOpen}>
        <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon/>
            </IconButton>
        </div>
        <Divider/>
        <List>{mainListItems}</List>
    </Drawer>
};
